import store from './store';

export default class GatewayConnection {
  constructor() {
    this.ws = new WebSocket(`wss://${store.state.server.host}/gateway`);
    this.ws.onopen = () => {
      this.state = 1;
      this.send({
        t: 0,
        d: {
          token: store.state.server.auth.token,
        },
      });
    };
    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onclose = () => store.commit('server/setConnectionState', 0);
    this.state = 0;
  }

  disconnect(code = 1000) {
    this.ws.close(code);
  }

  send(packet) {
    this.ws.send(JSON.stringify(packet));
  }

  onMessage(event) {
    let data;
    try {
      data = JSON.parse(event.data);
    } catch (error) {
      this.ws.close(1006);
    }
    this.onPacket(data);
  }

  onPacket(packet) {
    if (!packet.t) {
      this.ws.close(1006);
      return;
    }
    switch (packet.t) {
      case 2:
        this.state = 2;
        break;
      default:
        console.log(packet);
        break;
    }
  }
}
