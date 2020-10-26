export const MODULE_NAME = 'products'

/* MUTATIONS */
export const START_FIND_PRODUCTS = 'startFindProducts'
export const START_FIND_PRODUCTS_MUTATION = `${MODULE_NAME}/${START_FIND_PRODUCTS}`

export const SUCCESS_FIND_PRODUCTS = 'successFindProducts'
export const SUCCESS_FIND_PRODUCTS_MUTATION = `${MODULE_NAME}/${SUCCESS_FIND_PRODUCTS}`

export const FAILURE_FIND_PRODUCTS = 'failureFindProducts'
export const FAILURE_FIND_PRODUCTS_MUTATION = `${MODULE_NAME}/${FAILURE_FIND_PRODUCTS}`

/* ACTIONS */
export const FIND_PRODUCTS = 'findProducts'
export const FIND_PRODUCTS_ACTION = `${MODULE_NAME}/${FIND_PRODUCTS}`

/* GETTERS */
export const GET_PRODUCTS = 'getProducts'
export const GET_PRODUCTS_GETTER = `${MODULE_NAME}/${GET_PRODUCTS}`

export const GET_CURRENCY = 'getCurrency'
export const GET_CURRENCY_GETTER = `${MODULE_NAME}/${GET_CURRENCY}`

export const GET_PRODUCT = 'getProduct'
export const GET_PRODUCT_GETTER = `${MODULE_NAME}/${GET_PRODUCT}`
