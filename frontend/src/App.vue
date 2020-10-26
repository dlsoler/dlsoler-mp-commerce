<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { FIND_PRODUCTS_ACTION } from './store/products/constants'

export default {
  name: 'App',
  mounted () {
    this.$q.loading.show()

    this.$store.dispatch(FIND_PRODUCTS_ACTION)
      .then(() => {
        this.$q.loading.hide()
      })
      .catch((error) => {
        this.$q.loading.hide()
        this.$q.notify({
          timeout: 0,
          message: `No pudieron cargar los datos de los productos: ${error.message}`,
          type: 'warning',
          icon: 'smartphone',
          position: 'center'
        })
      })
  }
}
</script>
