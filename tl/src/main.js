// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'


// 显示声明
Vue.use(router);
Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router,
  components: {App},
  template: '<App>',
})
