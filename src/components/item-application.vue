<template>
  <li class="list-group-item border-top border-bottom border-left-0 border-right-0 rounded-0">
    <div class="media media_s">
      <div class="avatar pr-3">
        <img
          :src="['/image/'+application.whoAddId+'.jpeg']"
          class="img avatar_img_size_m rounded-circle"
        >
      </div>
      <div class="media-body w-100">
        <p class="text text_shadow">
          {{ application.whoAddName }}
          <small>posted an updated</small>
        </p>
        <div class="box-text d-flex flex-column justify-content-between">
          <p class="text-secondary">
            {{ application.text }}
          </p>
          <button
            v-if="(user.employee === true) && (!application.comment) && (!changeComment)"
            type="button"
            class="btn btn_theme_primary text-white btn_waves_effect border-0 ml-auto"
            @click="setChangeComment"
          >
            Ответить
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="(user.employee === true) && changeComment"
      class="ml-4 mt-3"
    >
      <form
        class="d-flex flex-wrap justify-content-end"
        @submit.prevent="saveComment"
      >
        <textarea
          v-model="commentValue"
          class="form-control"
          rows="3"
        />
        <button
          type="submit"
          class="btn btn_theme_primary text-white btn_waves_effect border-0 mt-3"
        >
          Сохранить
        </button>
        <button
          v-if="(user.employee === true) && changeComment"
          type="button"
          class="btn bg-danger text-white border-0 mt-3 ml-3"
          @click="cancelChangeComment"
        >
          Отмена
        </button>
      </form>
    </div>
    <div
      v-if="application.comment && !changeComment"
      class="media media_s ml-4 mt-3 border rounded p-2"
    >
      <div class="avatar pr-3">
        <img
          :src="[application.whoAscId ? ('/image/'+application.whoAscId+'.jpeg'):'']"
          class="img avatar_img_size_m rounded-circle"
        >
      </div>
      <div class="media-body w-100">
        <p class="text text_shadow">
          {{ application.whoAscName }}
          <small>posted an updated</small>
        </p>
        <div class="box-comment d-flex flex-column justify-content-between">
          <p class="text-secondary">
            {{ commentValue }}
          </p>
          <button
            v-if="(user.employee === true) && (application.comment)"
            type="button"
            class="btn btn_theme_primary text-white btn_waves_effect border-0 ml-auto"
            @click="setChangeComment"
          >
            Редактировать
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ItemApplication',
    props: {
      //данные заявки
      application: {
        type: Object,
        default: function () {
          return {}
        },
      },
    },
    data () {
      return {
        commentValue: this.application.comment,
        changeComment: false
      }
    },
    computed: {
      ...mapGetters(['user', 'uid']),
    },
    methods: {
      saveComment () {
        let data = {}
        let comment = String(this.commentValue)
        let whoAsc = this.uid
        let whoAscName = this.user.name
        let whoAscId = +(this.user.id)
        if (comment !== this.application.comment) {
          data.doc = this.application.doc
          data.change = {comment, whoAscName, whoAscId, whoAsc}
          this.$store.dispatch('UPDATE_APPLICATION', data)
        }
        this.changeComment = false
      },
      setChangeComment () {
        this.changeComment = true
      },
      cancelChangeComment () {
        this.changeComment = false
        this.commentValue = this.application.comment
      }
    }

  }
</script>

<style lang="scss">
  @import '../assets/scss/components/media.scss';
</style>