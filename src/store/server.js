import request from 'superagent';

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    setAuth(state, { data }) {
      state.auth = data;
    },
  },
  actions: {
    async verifyDiscord(context, { code, host }) {
      const data = (await request
        .post(`https://${host}/api/authenticate/discord`)
        .send({ code })
      ).body;
      context.commit('setAuth', { data });
      return data;
    },
    async verifyGoogle(context, { code, host }) {
      const data = (await request
        .post(`https://${host}/api/authenticate/google`)
        .send({ code })
      ).body;
      context.commit('setAuth', { data });
      return data;
    },
  },
};
