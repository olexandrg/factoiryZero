<template>
  <div id="app">
    <!-- Factory Logo here -->
    <!-- TODO: optional message -->
    <Nav></Nav>
    <Login msg=""/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Login,
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
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


</style>
