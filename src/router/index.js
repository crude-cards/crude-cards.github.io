import Vue from 'vue';
import Router from 'vue-router';
import Views from '@/views';
import store from '../store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Views.Index,
    },
    {
      path: '/select-server',
      name: 'select-server',
      component: Views.SelectServer,
    },
    {
      path: '/login',
      name: 'login',
      component: Views.Login,
      async beforeEnter(to, from, next) {
        if (!to.query || !to.query.server) next(Error('No server'));
        await store.dispatch('serverListings/cache', to.query.server).then(next, () => {
          next({ name: 'select-server' });
        });
      },
    },
    {
      path: '/gateway-connect',
      name: 'gateway-connect',
      component: Views.GatewayConnect,
      async beforeEnter(to, from, next) {
        if (!store.state.server.auth) next({ name: 'select-server' });
        else next();
      },
    },
    {
      path: '/game',
      name: 'game',
      component: Views.Game,
      async beforeEnter(to, from, next) {
        if (!store.state.server.auth) next({ name: 'select-server' });
        else next();
      },
    },
  ],
});

export default router;
