import request from 'snekfetch';

const servers = { 'alpha.crudecards.xyz': null };
const cached = JSON.parse(localStorage.getItem('serverListings/servers')) || [];

cached.forEach((host) => { servers[host] = null; });

export default {
  namespaced: true,
  state: {
    servers,
  },
  mutations: {
    cache(state, { host, data }) {
      state.servers[host] = data;
      localStorage.setItem('serverListings/servers', JSON.stringify(Object.keys(state.servers)));
    },
  },
  actions: {
    async cache(context, host) {
      const data = (await request.get(`https://${host}/api/meta`)).body;
      context.commit('cache', { host, data });
    },
  },
};
