<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

// Component Import
<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

// Style
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Zen+Old+Mincho&display=swap');
/* 
Fonts List:
- Lato
- Zen Old Mincho
*/
#app {
  font-family: 'Zen Old Mincho', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
