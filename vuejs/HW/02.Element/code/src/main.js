// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'                      // ElementUI를 가져온다.
import 'element-ui/lib/theme-chalk/index.css'      // ElementUI의 css를 가져온다
import locale from 'element-ui/lib/locale/lang/ko'  // ElementUI 언어 설정-ko
Vue.use(ElementUI, { locale })                            // ElementUI를 vue에 등록

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
