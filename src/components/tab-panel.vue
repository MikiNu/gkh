<template>
  <div class="tab bg-white p-4">
    <div class="tab__panel">
      <ul
        v-if="checkTab"
        class="tab__list d-flex flex-wrap p-0 mb-0 list list_style_none"
        role="tablist"
      >
        <li
          v-if="user.employee === false"
          class="tab__item d-none d-md-block"
        >
          <a
            :class="[(activeTab === 'create') ? 'active':'text-secondary', 'tab__name text-decoration-none d-block pl-3 pr-3 pt-2 pb-2']"
            href="#"
            role="button"
            @click.prevent="setActiveTab('create')"
          >
              Создать заявку
          </a>
        </li>
        <li
          class="tab__item d-none d-md-block"
        >
          <a
            :class="[(activeTab === 'list') ? 'active':'text-secondary', 'tab__name text-decoration-none d-block pl-3 pr-3 pt-2 pb-2']"
            href="#"
            role="button"
            @click.prevent="setActiveTab('list')">
            Заявки
            <span
              v-if="countApplications > 0"
              class="badge badge-pill badge-danger"
            >
              {{ countApplications }}
            </span>
          </a>
        </li>
        <li class="tab__item dropdown d-md-none">
          <a
            class="tab__name active text-decoration-none dropdown-toggle d-block pl-3 pr-3 pt-2 pb-2"
            data-toggle="dropdown"
            href="#"
            aria-expanded="false"
            role="button"
            @click.prevent="updateMenu()"
          >
            Меню
          </a>
          <div
            :class="[showMenu ? 'show' : '', 'menu dropdown-menu']"
            aria-labelledby="menu"
          >
            <a
              v-if="user.employee === false"
              :class="[(activeTab === 'create') ? 'active':'menu__item text-secondary', 'menu__item dropdown-item border-0 m-1 w-auto']"
              href="#"
              role="button"
              @click.prevent="selectTab('create')"
            >
              Создать заявку
            </a>
            <a
              :class="[(activeTab === 'list') ? 'active':'menu__item text-secondary', 'menu__item dropdown-item border-0 m-1 w-auto']"
              href="#"
              role="button"
              @click.prevent="selectTab('list')"
            >
                Заявки
                <span
                  v-if="countApplications > 0"
                  class="badge badge-pill badge-danger"
                >
                  {{ countApplications }}
                </span>
            </a>
          </div>
        </li>
      </ul>
      <div class="tab__content">
        <div
          class="active animation-slide-left"
          role="tabpanel"
        >
          <component
            :is="activeTabComponent"
            class="tab"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const CreateApplication = () => import('./create-application.vue')
  const ListApplication = () => import('./list-application.vue')

  export default {
    name: 'TabPanel',
    //хэш компонентов, доступных в данном экземпляре
    components: {
      CreateApplication,
      ListApplication
    },
    data () {
      return {
        showMenu: false,
        activeTab: '',
      }
    },
    computed: {
      ...mapGetters(['user', 'applications', 'uid']),
      activeTabComponent () {
        return (this.activeTab+'-application').toLowerCase()
      },
      checkTab () {
        if (this.user.employee) {
          ListApplication()
          this.setActiveTab('list')
        } else {
          CreateApplication()
          this.setActiveTab('create')
        }
        return true
      },
      countApplications () {
        return this.applications.length
      }
    },
    methods: {
      updateMenu () {
        this.showMenu = !this.showMenu
      },
      selectTab (tab) {
        this.setActiveTab(tab)
        this.updateMenu()
      },
      setActiveTab (tabName) {
        this.activeTab = tabName
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/tabpanel-style.scss';
</style>