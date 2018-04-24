// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueHighcharts from 'vue-highcharts'
import highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more';
import solidgauge from "highcharts/modules/solid-gauge";
import boost from "highcharts/modules/boost";
import CustomEvents from 'highcharts-custom-events'

Vue.use(VueHighcharts)
Vue.use(highcharts, {CustomEvents})

highchartsMore(highcharts);
solidgauge(highcharts);
boost(highcharts);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
