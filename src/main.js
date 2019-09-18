// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import axios from 'axios'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import router from './router'
import i18n from './i18n'

Vue.use(BootstrapVue)

Vue.component('RingLoader', RingLoader)

axios.defaults.baseURL = process.env.API_BASE_URL

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiresLogin && !store.state.user.isLoggedIn) {
    next({name: 'login'})
  } else {
    next()
  }
})

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    applicationName: 'NYCL',
    season: 2018,
    user: {
      isLoggedIn: false,
      role: '',
      club: ''
    }
  },

  mutations: {
    'LOGIN_SUCCESS' (state, data) {
      state.user.isLoggedIn = true
      state.user.role = data.role
      state.user.club = data.clubName
    },
    'LOGOUT' (state) {
      state.user.isLoggedIn = false
      state.user.role = ''
    }
  },

  actions: {
    login ({commit}, credentials) {
      return axios.post('security/login', {username: credentials.username, password: credentials.password},
        { headers: {'Content-Type': 'application/json'} }).then(function (response) {
          commit('LOGIN_SUCCESS', response.data)
        })
    },

    logout ({commit}) {
      return axios.get('security/logout').then(function () {
        commit('LOGOUT')
      })
    }
  },

  getters: {
    isLoggedIn: function (state) {
      return state.user.isLoggedIn
    },
    getRole: function (state) {
      return state.user.role
    },
    getClub: function (state) {
      return state.user.club
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  i18n,
  render: h => h(App)
}).$mount('#app')
