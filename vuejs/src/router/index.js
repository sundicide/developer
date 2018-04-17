import Vue from 'vue';
import Router from 'vue-router';
import MainDiv from '@/components/MainDiv';
import Directive from '@/components/Directive';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainDiv',
      component: MainDiv,
    },
    {
      path: '/directive',
      name: 'Directive',
      component: Directive,
    },
  ],
});
