import request from 'superagent';
import GatewayConnection from './connection';

export default {
  namespaced: true,
  state: {
    host: null,
    auth: null,
    connection: null,
  },
  mutations: {
    setAuth(state, { data }) {
      state.auth = data;
    },
    setHost(state, { host }) {
      state.host = host;
    },
    setConnection(state, { connection }) {
      state.connection = connection;
    },
  },
  actions: {
    async verifyDiscord(context, { code, host }) {
      const data = (await request
        .post(`https://${host}/api/authenticate/discord`)
        .send({ code })
      ).body;
      context.commit('setHost', { host });
      context.commit('setAuth', { data });
      return data;
    },
    async verifyGoogle(context, { code, host }) {
      const data = (await request
        .post(`https://${host}/api/authenticate/google`)
        .send({ code })
      ).body;
      context.commit('setHost', { host });
      context.commit('setAuth', { data });
      return data;
    },
    connect(context) {
      const connection = new GatewayConnection(context);
      context.commit('setConnection', connection);
    },
  },
};
