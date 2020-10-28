<template>
  <q-page padding>
    <div class="row full-width flex-center">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h4">Pago pendiente</div>
            <div class="text-subtitle2">Tu pago ha quedado pendiente de concretarse.</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row full-width flex-center">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <query-data />
      </div>
    </div>
  </q-page>
</template>

<script>
import queryData from '../components/querydata'
export default {
  name: 'pendingPage',
  components: {
    'query-data': queryData
  }
}
</script>
