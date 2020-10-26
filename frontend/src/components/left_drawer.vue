<template>
  <q-list>

    <q-item-label header class="text-grey-8">Menú</q-item-label>

    <q-item
      v-for="(menuItem, index) in menuItems"
      :key="`mitem-${index}`"
      clickable
      :to="menuItem.link"
    >
      <q-item-section
        v-if="menuItem.icon"
        avatar
      >
        <q-icon :name="menuItem.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ menuItem.title }}</q-item-label>
        <q-item-label caption>{{ menuItem.caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      menuItems: [
        {
          title: 'Inicio',
          caption: 'Página de inicio',
          icon: 'home',
          link: '/'
        }
      ]
    }
  }
}
</script>
