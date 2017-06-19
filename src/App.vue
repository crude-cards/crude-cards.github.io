<template>
  <div id="app">
    <img src="/static/assets/logo.svg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Arimo', sans-serif;
  text-align: center;
}
</style>
