<template>
  <div class="container">
    <div id="intro">
      <h1>Login to {{ host }}</h1>
      <p>
        <button @click="google()">Google</button>
        <button @click="discord()">Discord</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login-view',
  computed: {
    host() { return this.$route.query.server; },
    data() { return this.$store.state.serverListings.servers[this.host]; },
  },
  methods: {
    async discord() {
      const redirect = `${window.location.origin}/static/verify.html`;
      const popup = window.open(
        `https://discordapp.com/oauth2/authorize?client_id=${encodeURIComponent(this.data.authentication.discord_client_id)}&scope=identify&redirect_uri=${redirect}&response_type=code`,
        'discordoauth',
        'width=450,height=500');
      const listener = async (event) => {
        if (event.origin !== location.origin) return;
        const code = event.data;
        window.removeEventListener('message', listener);
        this.$store.dispatch('server/verifyDiscord', { code, host: this.host })
          .then(() => {
            popup.close();
            this.$router.push({ name: 'gateway-connect' });
          });
      };
      window.addEventListener('message', listener);
    },
    google() {
      const redirect = `${window.location.origin}/static/verify.html`;
      const popup = window.open(
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(this.data.authentication.google_client_id)}&scope=openid&redirect_uri=${redirect}&response_type=code`,
        'googleoauth',
        'width=450,height=500');
      const listener = (event) => {
        if (event.origin !== location.origin) return;
        const code = event.data;
        window.removeEventListener('message', listener);
        this.$store.dispatch('server/verifyGoogle', { code, host: this.host })
          .then(() => {
            popup.close();
            this.$router.push({ name: 'gateway-connect' });
          });
      };
      window.addEventListener('message', listener);
    },
  },
};
</script>
