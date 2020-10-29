<template>
  <q-page class="flex flex-center">
    <div class="text-h3">Smartphones</div>
    <div class="q-pa-md row items-start full-width">
      <div v-for="(product, index) in products" v-bind:key="`prod-${index}`" class="col-xs-12 col-md-6 col-lg-4" >
        <q-card  class="product-card q-pa-lg" flat  >

          <img class="product-img" :src="product.image" :alt="product.title"/>

          <q-card-section>
            <div class="text-h4 text-center">{{ product.title }}</div>
            <div class="text-subtitle2 text-center">{{ product.subtitle }}</div>
          </q-card-section>

          <q-card-section>
            <div class="product-description">{{ product.description }}</div>
          </q-card-section>

          <q-card-section class="product-price-container">
            <div class="text-h4 text-center product-price">
              <span class="currency-symbol">{{ currencySymbol }}</span>
              <span class="price-value">{{ product.price }}</span></div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="center">
            <q-btn class="q-mb-md" size="lg" color="primary" padding="4px 20px" :to="`/buy/${product.id}`" >Comprar</q-btn>
            <q-btn class="q-mb-md" size="lg" color="primary" outline padding="4px 20px" :to="`/item/${product.id}`">Más Info</q-btn>
          </q-card-actions>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
import { GET_PRODUCTS_GETTER, GET_CURRENCY_GETTER } from '../store/products/constants'
export default {
  name: 'PageIndex',
  data () {
    return {
      currencySymbol: this.$store.getters[GET_CURRENCY_GETTER]
    }
  },
  computed: {
    products () {
      return this.$store.getters[GET_PRODUCTS_GETTER]
    }
  },
  methods: {
    buyProduct (productId) {
      console.log(productId)
    }
  }
}
</script>

<style lang="scss">
.q-card {
  .product-description {
    max-width: 100%;
  }
  &>img.product-img {
    max-height: 445px;
    width: auto;
    margin: 0 auto;
  }
}

</style>
