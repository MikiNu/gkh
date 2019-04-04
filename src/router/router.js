import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'

const Home = ()=> import('../components/home.vue')
const Login = () => import('../components/login.vue')

Vue.use(Router)

//проверка НЕ авторизирован ли пользователь
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    //переход к следующему хуку в цепочке
    next()
    return
  }
  //перенаправление на другой маршрут
  next('/')
}

//проверка авторизирован ли пользователь
const ifAuthenticated = (to, from, next) => {
  //если авторизирован
  if (store.getters.isAuthenticated) {
    if (store.getters.applications === '') {
      store.dispatch('GET_APPLICATION')
    }
    //переход к следующему хуку в цепочке
    next()
    return
  }
  //перенаправление на другой маршрут
  next('/login')
}

//хук beforeEnter вызывается до подтверждения пути
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})