import { boot } from 'quasar/wrappers'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

/**
 * API CONFIGURATION
 */
export const API_CONFIG = {
  hostname: 'dlsoler-mp-commerce-nodejs.herokuapp.com/',
  port: 80,
  protocol: 'https',
  restApiRoot: '/api'
}

class HttpClient {
  constructor (axiosConfig) {
    this.instance = axios.create(axiosConfig)
    this._initializeResponseInterceptor()

    // TODO: Check if the axios issue was solved (axios ignores default params in requests)
    this.instance.interceptors.request.use(
      this._handleRequest.bind(this)
    )
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    )
  }

  _handleResponse = ({ data }) => data
  _handleError = (error) => Promise.reject(error)

  /**
   * Change the params for request adding access_token for loopback
   * this a monkey patch because a bug descripted in an issue in axios repository
   * @param config current Axios request configuration
   */
  _handleRequest (config) {
    if (isEmpty(this.instance.defaults.params) || isEmpty(this.instance.defaults.params.access_token)) {
      return config
    }
    config.params = config.params || {}
    config.params.access_token = this.instance.defaults.params.access_token
    return config
  }
}

class API extends HttpClient {
  constructor (apiConfig) {
    super({
      baseURL: apiConfig.baseURL
    })
    this._apiConfig = apiConfig
  }

  findProducts () {
    const url = '/Products'
    return this.instance.get(url)
      .then((res) => res)
  }

  findPreference (itemId) {
    const url = '/mercadopago'
    return this.instance.post(url, { itemId }
    )
  }
}

export const apiConfig = Object.assign({}, API_CONFIG)
apiConfig.baseURL = `${apiConfig.protocol}://${apiConfig.hostname}:${apiConfig.port}${apiConfig.restApiRoot}`

// Export for testing
export const apiInstance = new API(apiConfig)

export default boot(({ store }) => { /* { store, app, router, Vue ... } */
  store.$api = apiInstance
})
