<template>
  <q-page padding class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h4">Pago no realizado</div>
        <div class="text-subtitle2">Lamentablemente tu pago no se ha concretado.</div>
      </q-card-section>

      <q-card-section>
        <div class="text-h6">Información del pago</div>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>Payment Id</q-item-label>
              <q-item-label caption lines="2"><strong>payment_id</strong><span> que se uso para pagar.</span></q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>External Reference</q-item-label>
              <q-item-label caption lines="2"><strong>external reference</strong><span> usada durante el pago.</span></q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>ID de Pago</q-item-label>
              <q-item-label caption lines="2">
                <strong>payment_id</strong>
                <span> o </span>
                <strong>collection_id</strong>
                <span> usada durante el pago.</span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn size="lg" color="primary" outline padding="4px 20px" to="/">Volver</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'failurePage'
}
</script>
