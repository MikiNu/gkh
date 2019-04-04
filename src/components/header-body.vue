<template>
  <header
    class="header position-sticky"
  >
    <nav class="navbar navbar-expand-md navbar_theme pt-0 pb-0">
      <div class="navbar_header_size d-flex justify-content-between">
        <button
          type="button"
          class="navbar-toggler text-white order-1 order-md-1 rounded-0 btn_outline_none waves_theme_nav"
          data-toggle="collapse"
          data-target="#menubar"
          aria-controls="menubar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <v-icon
            name="bars"
            scale="1.2"
          />
        </button>
        <button
          type="button"
          class="navbar-toggler text-white order-3 order-md-2 rounded-0 btn_outline_none waves_theme_nav"
          data-toggle="collapse"
          data-target="#site-navbar-collapse"
          aria-controls="site-navbar-collapse"
        >
          <v-icon
            name="ellipsis-v"
            scale="1.2"
          />
        </button>
        <div
          class="navbar-brand d-flex align-items-center pl-2 order-2 order-md-3"
          data-toggle="gridmenu"
          aria-expanded="true"
        >
          <img
            src="../assets/images/logo-colored.png"
            title="Remark"
          >
          <span class="d-none d-sm-block ml-2"> Remark</span>
        </div>
      </div>
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse navbar-collapse-toolbar d-none d-md-flex justify-content-between"
        >
          <ul class="nav">
            <li
              class="waves hidden-float"
            >
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="menubar"
                href="#"
                role="button"
                @click.prevent
              >
                <v-icon
                  name="arrow-left"
                  scale="1"
                />
              </a>
            </li>
            <li
              class="waves nav-item hidden-sm-down"
            >
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="fullscreen"
                href="#"
                role="button"
                @click.prevent
              >
                <v-icon
                  name="expand"
                  scale="1"
                />
                <span class="sr-only">Toggle fullscreen</span>
              </a>
            </li>
            <li class="waves nav-item hidden-float">
              <a
                class="nav-link icon md-search waves_theme_nav text-white pt-4 pb-4"
                data-toggle="collapse"
                href="#"
                data-target="#site-navbar-search"
                role="button"
                @click.prevent
              >
                <v-icon
                  name="search"
                  scale="1"
                />
                <span class="sr-only">Toggle Search</span>
              </a>
            </li>
            <li class="waves nav-item dropdown dropdown-fw dropdown-mega">
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
                data-animation="fade"
                role="button"
                @click.prevent
              >
                Mega
                <v-icon
                  name="angle-down"
                  scale="1"
                />
              </a>
            </li>
          </ul>

          <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
            <li class="waves nav-item dropdown d-flex align-items-stretch">
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="dropdown"
                href="#"
                data-animation="scale-up"
                aria-expanded="false"
                role="button"
                @click.prevent
              >
                <img
                  class="icon_size_s"
                  src="../assets/images/us.svg"
                >
              </a>
            </li>
            <li class="waves nav-item dropdown d-flex align-items-stretch">
              <a
                class="nav-link navbar-avatar waves_theme_nav text-white pt-4 pb-4"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
                data-animation="scale-up"
                role="button"
                @click.prevent="updateLogoutMenu()"
              >
                <span class="avatar">
                  <img
                    :src="[user.id ? ('/image/'+user.id+'.jpeg'):'']"
                    class="avatar_img_size_s rounded-circle"
                  >
                  <i />
                </span>
              </a>
              <div
                :class="[showLogoutMenu ? 'show' : '', 'tab-menu dropdown-menu']"
                aria-labelledby="menu"
              >
                <a
                  class="dropdown-item menu__item border-0 m-1 w-auto"
                  href="#"
                  role="button"
                  @click.prevent="logout()"
                >
                  Выйти
                </a>
              </div>
            </li>
            <li class="waves nav-item dropdown d-flex align-items-stretch">
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="dropdown"
                href="#"
                title="Notifications"
                aria-expanded="false"
                data-animation="scale-up"
                role="button"
                @click.prevent
              >
                <v-icon
                  name="bell"
                  scale="1"
                />
                <span class="badge badge-pill badge-danger badge__up">5</span>
              </a>
            </li>
            <li class="waves nav-item dropdown d-flex align-items-stretch">
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="dropdown"
                href="#"
                title="Messages"
                aria-expanded="false"
                data-animation="scale-up"
                role="button"
                @click.prevent
              >
                <v-icon
                  name="envelope"
                  scale="1"
                />
                <span class="badge badge-pill badge-info badge__up">3</span>
              </a>
            </li>
            <li
              class="waves nav-item d-flex align-items-stretch"
            >
              <a
                class="nav-link waves_theme_nav text-white pt-4 pb-4"
                data-toggle="site-sidebar"
                href="#"
                title="Chat"
                data-url="../site-sidebar.tpl"
                @click.prevent
              >
                <v-icon
                  name="comment-alt"
                  scale="1"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'HeaderBody',
    data() {
      return {
        showLogoutMenu: false
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    methods: {
      updateLogoutMenu() {
        this.showLogoutMenu = !this.showLogoutMenu
      },
      logout() {
        this.$store.dispatch('AUTH_LOGOUT')
        this.$router.push('/login')
        this.showLogoutMenu = false
      },
    }
  }
</script>
