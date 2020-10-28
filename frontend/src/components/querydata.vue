<template>
  <q-card>

    <q-card-section>
      <div class="text-h6">Información del pago</div>
      <q-list>
        <q-item
          :id="`item-${index}`"
          class="query-param"
          v-for="(param, index) in queryData"
          :key="`pr-${index}`"
        >
          <q-item-section>
            <q-item-label><strong>{{ param.name }}</strong></q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label><strong>{{ param.value}}</strong></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-card-actions align="around">
      <q-btn size="lg" color="primary" outline padding="4px 20px" to="/">Volver</q-btn>
    </q-card-actions>

  </q-card>
</template>

<script>
import isEmpty from 'lodash/isEmpty'
export default {
  name: 'queryData',
  computed: {
    queryData () {
      if (isEmpty(this.$route.query)) {
        return []
      }
      const result = Object.entries(this.$route.query).map(([k, v]) => ({ name: k, value: v }))
      return result
    }
  }
}
</script>
