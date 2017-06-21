<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade-resize">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
