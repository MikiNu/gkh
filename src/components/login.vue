<template>
  <div class="login">
    <div class="login__page min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
      <div class="login__wrap pt-4">
        <div class="login__panel bg-white m-2 p-5">
          <div class="login__brand">
            <img
              class="brand-img"
              src="../assets/images/logo-colored.png"
            >
            <h5 class="brand-text mt-2">
              Remark
            </h5>
          </div>
          <div
            v-if="status === 'error'"
            class="alert alert-danger mt-4"
            role="alert"
          >
            Логин и/или пароль введены неверно.
          </div>
          <form
            class="form mt-5 mb-4"
            @submit.prevent="login"
          >
            <div class="form__wrap form-group position-relative">
              <input
                v-model="email"
                :class="[ email ? '' : 'empty','form-control form__input form_input_border']"
                type="email"
              >
              <label class="form__label form_label_indent">Email</label>
            </div>
            <div class="form form-group position-relative mt-4">
              <input
                v-model="password"
                :class="[ password ? '' : 'empty','form-control form__input form_input_border']"
                type="password"
              >
              <label class="form__label form_label_indent">Password</label>
            </div>
            <div class="form-group d-flex flex-wrap justify-content-between">
              <div class="custom-control custom-checkbox checkbox_theme_primary checkbox">
                <input
                  id="customCheck1"
                  class="custom-control-input checkbox__input"
                  type="checkbox"
                >
                <label
                  class="custom-control-label checkbox_label pl-2"
                  for="customCheck1"
                >
                  Remember me
                </label>
              </div>
              <a
                class="float-right"
                href="#"
                @click.prevent
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="btn text-white btn-block btn-lg mt-5 btn_theme_primary btn_waves_effect"
            >
              Sign in
            </button>
          </form>
          <p class="pt-1 mb-0">
            Still no account? Please go to
            <a
              href="#"
              @click.prevent
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      <footer class="page-copyright page-copyright-inverse mt-5">
        <p>WEBSITE BY Creation Studio</p>
        <p>© 2018. All RIGHT RESERVED.</p>
        <div class="waves">
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/twitter"
              scale="1.2"
            />
          </a>
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/facebook-f"
              scale="1"
            />
          </a>
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/google-plus-g"
              scale="1.4"
            />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      ...mapGetters(['status']),
    },
    methods: {
      //ф-ия авторизации
      login () {
        //определяем данные для отправки
        const {email, password} = this
        //вызов action из хранилища на запрос авторизации
        this.$store.dispatch('AUTH_REQUEST', {email, password}).then(() => {
          //если успех - переходим на главную страницу
          this.$router.push('/')
        })
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/login-slyle.scss';
</style>
