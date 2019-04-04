<template>
  <div>
    <ul
      v-if="(applications.length > 0)"
      class="list-group"
    >
      <item-application
        v-for="(application, key) in applications"
        :key="key"
        :application="application"
      />
    </ul>
    <div
      v-else
      class="p-5 m-4 text-center text-secondary"
    >
      У вам нет созданных заявок
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ItemApplication from './item-application.vue'

  export default {
    name: 'ListApplication',
    components: {
      ItemApplication
    },
    computed: {
      ...mapGetters(['applications']),
    }
  }
</script>
