<template>
  <div class="container">
    <div id="intro">
      <h1>Signing in as {{ server.auth.user.username }}</h1>
      <p>Well, you would be, but this site isn't done yet, dumbass.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gateway-connect',
  computed: {
    server() {
      return this.$store.state.server;
    },
  },
};
</script>
