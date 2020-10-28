'use strict';
/* eslint-disable camelcase, max-len */

// util module is used to promisify callback functions
const util = require('util');
// See https://www.npmjs.com/package/validator
const validator = require('validator');

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
// Lodash
const isEmpty = require('lodash/isEmpty');

// Default Mercado Pago config
const mercadoPagoConfig = {
  isInProduction: false,
  productionAccessToken: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',
  testingAccessToken: 'APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398',
  integrator_id: 'dev_24c65fb163bf11ea96500242ac130004',
  external_reference: 'solerdiego@gmail.com',
  currencyCode: 'ARS',
  notification_url: '/mp_notifications',
  autoReturn: 'all',
  backUrls: {
    success: '/#/success',
    pending: '/#/pending',
    failure: '/#/failure',
  },
  payment_methods: {
    excluded_payment_methods: [{id: 'amex'}],
    excluded_payment_types: [{id: 'atm'}],
    installments: 6,
    default_installments: 1,
  },
};

module.exports = function(Mercadopago) {
  /**
   * Returns Mercado Pago Access token from local configuration
   */
  Mercadopago.getMercadoPagoAccessToken = function() {
    // Get the right access token for production or testing
    const accessToken = (mercadoPagoConfig.isInProduction) ?
      mercadoPagoConfig.productionAccessToken :
      mercadoPagoConfig.testingAccessToken;
    return accessToken;
  };

  /**
   * After creates a Mercadopago model instance
   */
  Mercadopago.afterRemote('create', function(context, data, next) {
    // Product model
    const Product = Mercadopago.app.models.Product;

    // Values to create URLs in Heroku
    const hostname = context.req.hostname;
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseURL = `${protocol}://${hostname}`;

    // Find the product
    Product.findById(data.itemId)
      .then((item) => {
        if (!item) {
          return next(new Error(`Product not found. id: ${data.itemId}`));
        }
        // Get the Access token from settings
        const access_token = Mercadopago.getMercadoPagoAccessToken();
        // Add access token
        mercadopago.configure({
          access_token,
          integrator_id: mercadoPagoConfig.integrator_id,
        });

        // MP Payer
        const payer = {
          name: 'Lalo',
          surname: 'Landa',
          email: 'test_user_63274575@testuser.com',
          date_created: new Date(),
          phone: {
            area_code: '11',
            number: 22223333,
          },
          identification: {
            type: 'DNI',
            number: '12345678',
          },
          address: {
            street_name: 'False',
            street_number: 123,
            zip_code: '1111',
          },
        };
        // Product image absolute URL from heroku
        const imageUrl = `${baseURL}/${item.image}`;

        // MP Item
        const mpItem = {
          id: '1234',
          title: item.title,
          description: 'Dispositivo móvil de Tienda e-commerce',
          picture_url: imageUrl,
          quantity: 1,
          unit_price: item.price,
          currency_id: mercadoPagoConfig.currencyCode, // ISO 4217 Currency Alphabetic code
        };

        // MercadoPago preference object
        let preferenceData = {
          items: [mpItem],
          payer,
          external_reference: mercadoPagoConfig.external_reference,
          payment_methods: mercadoPagoConfig.payment_methods,
          notification_url: `${baseURL}${mercadoPagoConfig.notification_url}`,
        };

        if (!isEmpty(mercadoPagoConfig.autoReturn)) {
          preferenceData.auto_return = mercadoPagoConfig.autoReturn;
          const mpBacksUrls = {
            success: `${baseURL}${mercadoPagoConfig.backUrls.success}`,
            pending: `${baseURL}${mercadoPagoConfig.backUrls.pending}`,
            failure: `${baseURL}${mercadoPagoConfig.backUrls.failure}`,
          };
          preferenceData.back_urls = mpBacksUrls;
        }

        // Get the preference data id from MercadoPago
        return mercadopago.preferences.create(preferenceData);
      })
      .then((response) => {
        // Add the current timestamp
        const createdOn = new Date();
        // Preference Object returned by MercadoPago
        const preference = response.body;
        // dataPreferenceId returned by MP
        const dataPreferenceId = response.body.id;
        const initPoint = response.body.init_point;

        return data.updateAttributes(
          {
            createdOn,
            preference,
            dataPreferenceId,
            initPoint,
            preference: response.body,
          }
        );
      })
      .then((res) => {
        // All its ok
        next();
      })
      .catch((error) => {
        // Opps, something was wrong!
        next(error);
      });
  });

  Mercadopago.testreq =  async function(req, res, options) {
    return {
      protocol: req.protocol,
      hostname: req.hostname,
      port: process.env.PORT,
      host2: Mercadopago.app.get('host'),
    };
  };

  Mercadopago.remoteMethod('testreq', {
    description: 'Testing remote request',
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'res', type: 'object', http: {source: 'res'}},
      {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    ],
    returns: {type: 'object', root: true},
    http: {
      verb: 'get',
    },
  });
};
