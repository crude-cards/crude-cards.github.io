<template>
  <div class="container">
    <div id="intro">
      <h1>Select Server</h1>
      <div id="listingsWrapper">
        <server-listing v-for="data, host in servers" :host="host"></server-listing>
      </div>
    </div>
  </div>
</template>
<script>
import ServerListing from '../components/ServerListing';

export default {
  name: 'select-server-view',
  components: { ServerListing },
  computed: {
    servers() {
      return this.$store.state.serverListings.servers;
    },
  },
  methods: {
    cache(host) {
      this.$store.dispatch('serverListings/cache', host);
    },
  },
};
</script>

<style lang="scss" scoped>
#listingsWrapper {
  display: flex;
  text-align: left;
  flex-direction: column;
}
</style>
