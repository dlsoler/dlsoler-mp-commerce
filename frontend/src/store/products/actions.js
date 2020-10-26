import { START_FIND_PRODUCTS, SUCCESS_FIND_PRODUCTS, FAILURE_FIND_PRODUCTS, FIND_PRODUCTS } from './constants'

export default {
  [FIND_PRODUCTS] ({ commit }, payload) {
    commit(START_FIND_PRODUCTS)
    return this.$api.findProducts()
      .then((products) => {
        commit(SUCCESS_FIND_PRODUCTS, { products })
        return products
      })
      .catch((error) => {
        commit(FAILURE_FIND_PRODUCTS, { error })
        return Promise.reject(error)
      })
  }
}
