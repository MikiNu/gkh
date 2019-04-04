<template>
  <div
    v-if="(statusApplications === 'success')"
  >
    <header-body />
    <menu-bar />
    <div class="page">
      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-lg-3">
            <card-profile />
          </div>
          <div class="col-lg-9">
            <tab-panel />
          </div>
        </div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeaderBody from './header-body.vue'
  import CardProfile from './card-profile.vue'
  import TabPanel from './tab-panel.vue'
  import MenuBar from "./menu-bar.vue"
  import FooterPage from "./footer-page.vue"

  export default {
    name: 'Home',
    //хэш компонентов, доступных в данном экземпляре
    components: {
      MenuBar,
      HeaderBody,
      CardProfile,
      TabPanel,
      FooterPage
    },
    computed: {
      ...mapGetters(['applications', 'statusApplications']),
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/homepage-style.scss';
</style>