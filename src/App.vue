<template>
 <h1>Morra online by Biagio e Carmine</h1>
  <logout />
  <router-view />
</template>
<script>
import Logout from '@/components/Logout';

export default {
  components: {
    Logout
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
