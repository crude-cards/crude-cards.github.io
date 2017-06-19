<template>
  <div class="container">
    <div id="intro">
      <h1>Not ready yet srryyyy.</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'select-server-view',
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
  margin: 6rem 0;
  max-width: 1200px;
  overflow-x: auto;
  padding: 16px 0;

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
