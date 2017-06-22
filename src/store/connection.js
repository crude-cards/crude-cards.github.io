import store from './store';

export default class GatewayConnection {
  constructor() {
    this.ws = new WebSocket(`wss://${store.state.server.host}/gateway`);
    this.ws.onopen = function onopen() {
      this.send({
        t: 0,
        d: {
          token: store.state.server.auth.token,
        },
      });
    };
    this.ws.onclose = alert;
  }

  send(packet) {
    this.ws.send(JSON.stringify(packet));
  }
}
