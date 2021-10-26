<template>
  <div id="app">
    <Nav></Nav>
    <!-- TODO: optional message -->
    <!-- <Login msg=""/> -->
    <router-view></router-view>

  </div>
</template>

// Component Import
<script>
// import Login from './components/Login.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    // Login,
    Nav
  }
}
</script>

// Style
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
