<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>Tienda E-commerce</q-toolbar-title>

        <div>Desarrolada con Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      show-if-above
    >
      <left-drawer />
    </q-drawer>

    <div class="headline q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="/images/bg-2.jpg" >
          <div class="text-h3 text-center q-mt-xl">Tienda E-commerce</div>
        </q-parallax>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

     <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>&copy; 2020 Tienda E-commerce. All right reserverd.</q-toolbar-title>
          <div>Desarrollada por Diego Soler</div>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>

import leftDrawer from '../components/left_drawer'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  components: {
    'left-drawer': leftDrawer
  }
}
</script>
<style lang="scss">
  .headline {
    margin-top: 50px;
  }
</style>
