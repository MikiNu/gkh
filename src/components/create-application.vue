<template>
  <div class="d-flex mt-3">
    <button
      v-if="!create"
      type="submit"
      class="btn btn_theme_primary text-white btn_waves_effect border-0 mt-3 float-right"
      @click="createApplication()"
    >
      Создать заявку
    </button>
    <form
      v-else
      class="w-100"
      @submit.prevent="addApplication"
    >
      <div class="form-group">
        <label for="changeComment">Текст вашего обращения:</label>
        <textarea
          v-model="text"
          class="form-control"
          rows="3"
        />
      </div>
      <button
        type="submit"
        class="btn btn_theme_primary text-white btn_waves_effect border-0 mt-3 float-right"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CreateApplication',
    data () {
      return {
        text: '',
        create: false
      }
    },
    computed: {
      ...mapGetters(['user', 'uid']),
    },
    methods: {
      addApplication () {
        let text = this.text
        let whoAdd = this.uid
        let whoAddName = this.user.name
        let whoAddId = +(this.user.id)
        let data = {text, whoAdd, whoAddName, whoAddId}
        this.$store.dispatch('CREATE_APPLICATION', data).then(() => {
          this.text = ''
          this.create = false
        })
      },
      createApplication () {
        this.create = true
      }
    }
  }
</script>
