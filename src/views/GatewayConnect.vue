<template>
  <div class="container">
    <div id="intro">
      <h1>Signing in as {{ server.auth.user.username }}</h1>
      <p>{{ status }}</p>
    </div>
  </div>
</template>
<script>
const statuses = {
  0: 'Connecting to server...',
  1: 'Authenticating on server...',
  2: 'Ready!',
};

export default {
  name: 'gateway-connect',
  computed: {
    server() {
      return this.$store.state.server;
    },
    connectionState() {
      return (this.$store.state.server.connection || {}).state || 0;
    },
    status() {
      const state = this.connectionState;
      return statuses[state || 0];
    },
  },
  watch: {
    connectionState(n) {
      if (n === 2) {
        this.$router.push({ name: 'game' });
      }
    },
  },
  created() {
    this.$store.dispatch('server/connect');
  },
};
</script>
