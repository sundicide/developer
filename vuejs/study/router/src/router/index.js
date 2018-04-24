import Vue from 'vue';
import Router from 'vue-router';
import MainDiv from '@/components/MainDiv';
import Directive from '@/components/Directive';
import VueInstance from '@/components/VueInstance';
import Slot from '@/components/Slot';

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
    {
      path: '/vueinstance',
      name: 'VueInstance',
      component: VueInstance,
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot,
    },
  ],
});
