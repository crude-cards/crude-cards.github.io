import Vuex from 'vuex';
import Vue from 'vue';
import serverListings from './server-listings';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    serverListings,
  },
});

export default store;
