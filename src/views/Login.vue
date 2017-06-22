<template>
  <div class="container">
    <div id="intro">
      <h1>Login to {{ host }}</h1>
    </div>
    <div id="link-cards">
      <div class="wrapper">
        <div class="card" id="google-login" @click="google()">Login with Google.</div></div>
      <div class="wrapper">
        <div class="card" id="discord-login" @click="discord()">Login with Discord.</div></div>
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
<style scoped lang="scss">
@import '../style/theme';

#link-cards {
  display: inline-flex;
  margin: 0 auto;
  margin: 1rem 0;
  overflow-x: auto;
  padding: 32px 0;
  flex-direction: row;

  a {
	  text-decoration: none;
  }

  .wrapper {
    flex: 1;
    min-width: 288px;
    max-width: 288px;
    .card {
      margin: 0 auto;
    }
  }

  .wrapper:nth-child(odd) .card { transform: rotate(-5deg); }
  .wrapper:nth-child(even) .card { transform: rotate(5deg); }

  #google-login {
    background-image: url(/static/assets/google.svg);
  }
  
  #discord-login {
    background-image: url(/static/assets/discord.svg);
    background-size: auto 128px;
  }

  .card {
    background-repeat: no-repeat;
    background-size: 128px;
    background-position: center;
    background-color: #fefefe;
  }

  .card:hover {
    background-color: white;
  }
}

@media screen and (max-width: $mobile) {
  #link-cards {
    flex-direction: column;
    padding: 0;
    .card {
      transform: none !important;
    }
    .wrapper {
      margin-bottom: 24px;
    }
  }
}
</style>
