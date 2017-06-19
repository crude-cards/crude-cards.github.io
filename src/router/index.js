import Vue from 'vue';
import Router from 'vue-router';
import Views from '@/views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Views.Index,
    },
    {
      path: '/select-server',
      name: 'SelectServer',
      component: Views.SelectServer,
    },
  ],
});
