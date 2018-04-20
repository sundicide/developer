// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko';
import App from './App';
import router from './router';

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});