import Vuex from 'vuex';
import Vue from 'vue';
import serverListings from './server-listings';
import server from './server';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    serverListings,
    server,
  },
});

export default store;
