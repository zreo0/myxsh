// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  // 模拟登陆状态
  let isLogin = true;
  if (!isLogin) {
    if (to.path !== '/login') {
      return next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    if (to.path === '/page2') {
      return next({
        path: '/'
      });
    }
    next();
  }
});

const store = new Vuex.Store({
  state: {
    count: 0,
    user: ''
  },
  mutations: {
    increment (state, payload) {
      state.count++;
    },
    // 用户名
    setUser(state) {
      state.user = localStorage.userName;
    }
  },
  actions: {
    setUser({commit}) {
      commit('setUser');
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})