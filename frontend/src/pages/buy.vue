<template>
  <q-page :id="`page-item-${$route.params.id}`" padding class="flex flex-center" :key="`p-${$route.params.id}`">

    <div class="row full-width flex-center">
      <div class="text-h3">{{ item.title }}</div>
    </div>
    <div class="row full-width flex-center">
      <div class="text-h6 text-center">Oprime el botón para pagar con Mercado Pago y será tuyo...</div>
    </div>

    <div class="q-pa-md row items-start full-width flex-center">
      <div class="col-xs-12 col-md-2 flex flex-center">
        <img class="item-img" :src="item.image" :alt="item.title"/>
      </div>
      <div class="col-xs-12 col-md-4 flex flex-center">
        <q-card  class="item-card q-pa-lg" flat >
          <q-card-section >
            <div class="text-h4 text-center">{{ item.title }}</div>
            <div class="text-subtitle2 text-center">{{ item.subtitle }}</div>
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-center">Descripción</div>
            <div class="item-description">{{ item.description }}</div>
          </q-card-section>

          <q-card-section class="item-price-container">
            <div class="text-h4 text-center item-price">
              <span class="currency-symbol">{{ currencySymbol }}</span>
              <span class="price-value">{{ item.price }}</span></div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="around">
            <div ref="mpButton" class="mp-button"></div>
            <q-btn color="primary" outline padding="4px 20px" to="/">Volver</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { GET_PRODUCT_GETTER, GET_CURRENCY_GETTER } from '../store/products/constants'
import { FIND_PREFERENCE_ACTION } from '../store/mp/constants'
export default {
  name: 'buyPage',
  data () {
    return {
      currencySymbol: this.$store.getters[GET_CURRENCY_GETTER]
    }
  },
  computed: {
    item () {
      return this.$store.getters[GET_PRODUCT_GETTER](this.$route.params.id)
    }
  },
  methods: {
    buyProduct () {
      console.log(this.item.id)
    }
  },
  mounted () {
    const securityScript = document.createElement('script')
    securityScript.setAttribute('src', 'https://www.mercadopago.com/v2/security.js')
    securityScript.setAttribute('view', 'item')
    document.head.appendChild(securityScript)

    this.$q.loading.show()
    this.$store.dispatch(FIND_PREFERENCE_ACTION, { itemId: this.$route.params.id })
      .then((preferenceId) => {
        this.$q.loading.hide()
        const checkoutScript = document.createElement('script')
        checkoutScript.setAttribute('src', 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js')
        checkoutScript.setAttribute('view', 'item')
        checkoutScript.setAttribute('data-preference-id', preferenceId)
        checkoutScript.setAttribute('data-button-label', 'Pagar la compra')
        this.$refs.mpButton.appendChild(checkoutScript)
      })
      .catch((error) => {
        this.$q.loading.hide()
        console.error(error)
      })
  }
}
</script>

<style lang="scss">
.item-img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
