import { START_FIND_PRODUCTS, SUCCESS_FIND_PRODUCTS, FAILURE_FIND_PRODUCTS } from './constants'

export default {
  [START_FIND_PRODUCTS] (state, payload) {
    state.waiting = true
    state.error = null
  },
  [SUCCESS_FIND_PRODUCTS] (state, payload) {
    state.waiting = false
    state.products = payload.products
  },
  [FAILURE_FIND_PRODUCTS] (state, payload) {
    state.waiting = false
    state.error = payload.error
  }
}
