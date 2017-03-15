// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    // 模拟登陆状态
    let isLogin = true;
    if (!isLogin) {
        if (to.path !== '/page2') {
            alert('please login');
            return next({path: '/page2'});
        }else {
            next();
        }
    }else {
        if (to.path === '/page2') {
            return next({path: '/'});
        }
        next();
    }
    next();
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
