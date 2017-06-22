<template>
  <div class="container">
    <div id="intro">
      <h1>Signed in as {{ server.auth.user.username }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'game',
  computed: {
    server() {
      return this.$store.state.server;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (confirm('Do you want to leave? You will be disconnected.')) {
      this.$store.state.server.connection.disconnect();
      next();
    }
  },
};
</script>
