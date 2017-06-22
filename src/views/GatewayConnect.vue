<template>
  <div class="container">
    <div id="intro">
      <h1>Signing in as {{ server.auth.user.username }}</h1>
      <p>{{ status }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gateway-connect',
  data() {
    return {
      status: 'Connecting to gateway...',
    };
  },
  computed: {
    server() {
      return this.$store.state.server;
    },
  },
  created() {
    this.$store.dispatch('server/connect');
  },
};
</script>
