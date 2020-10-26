import isEmpty from 'lodash/isEmpty'
import { GET_PRODUCTS, GET_CURRENCY, GET_PRODUCT } from './constants'

export default {
  [GET_PRODUCTS] (state) {
    return state.products.map((product) => Object.assign({}, product))
  },
  [GET_CURRENCY] (state) {
    return state.currencySymbol
  },
  [GET_PRODUCT] (state) {
    return (id) => {
      const idNum = parseInt(id)
      if (typeof idNum !== 'number') {
        return
      }
      const product = state.products.find((item) => item.id === idNum)
      if (!isEmpty(product)) {
        return Object.assign({}, product)
      }
      return product
    }
  }
}
