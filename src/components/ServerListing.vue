<template>
  <div v-bind:class="['server-listing', { loading: !Boolean(data), error }]" @click="select()">
    <div class="part">
      <div class="title">{{ name | truncate(60) }}</div>
      <div class="data" v-if="data">
        <p class="description">{{ data.description | truncate(120) }}</p>
      </div>
    </div>
    <div class="part" v-if="data">
      <p><em>{{ data.players }} / {{ data.max_players}}</em> players</p>
      <p><em>{{ data.games }} / {{ data.max_games}}</em> games</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'server-listing',
  props: ['host'],
  computed: {
    name() {
      return this.data ? `${this.data.name} (${this.host})` : this.host;
    },
    data() {
      return this.$store.state.serverListings.servers[this.host];
    },
  },
  data() {
    return { error: false };
  },
  created() {
    this.$store.dispatch('serverListings/cache', this.host).catch(() => {
      this.error = true;
    });
  },
  methods: {
    select() {
      this.$router.push({
        name: 'login',
        query: { server: this.host },
      });
    },
  },
};
</script>
