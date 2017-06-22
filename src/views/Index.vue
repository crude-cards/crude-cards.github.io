<template>
  <div class="container">
    <div id="intro">
      <p><img src="/static/assets/logo.svg" id="logo"/></p>
      <h1>An online, open-source version of Cards Against Humanity.</h1>
    </div>
    <div id="link-cards">
      <div class="wrapper"><router-link to="select-server"><div class="black card">Play now.</div></router-link></div>
      <div class="wrapper"><a href="https://discord.gg/ZpXwXKJ"><div class="card">Join our Discord Server.</div></a></div>
      <div class="wrapper"><a href="https://twitter.com/crude_cards"><div class="card">Follow us on Twitter.</div></a></div>
      <div class="wrapper"><a href="https://github.com/crude-cards/"><div class="card">View the source code on GitHub.</div></a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index-view',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../style/theme';

.holder {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}
.part {
  flex: 1;
  padding: 4rem;
}
.smallest {
  max-width: 256px;
}
img#logo {
  max-width: 256px;
  width: 100%;
}
#intro {
  margin: 1rem;
  h1 { font-size: 22px; }
}

#link-cards {
  display: flex;
  margin: 0 auto;
  margin: 2rem 0;
  max-width: 1200px;
  width: 100%;
  overflow-x: auto;
  padding: 32px 0;

  a {
	  text-decoration: none;
  }

  .wrapper {
    flex: 1;
    min-width: 288px;
    .card {
      margin: 0 auto;
    }
  }

  .wrapper:nth-child(odd) .card { transform: rotate(-5deg); }
  .wrapper:nth-child(even) .card { transform: rotate(5deg); }
}

@media screen and (min-width: $mobile) {
  .holder {
    margin-top: 8rem;
    flex-direction: row;
  }
  .smallest {
    margin-left: 0;
    max-width: auto;
  }
  .part {
    padding: 0;
  }
}
</style>
