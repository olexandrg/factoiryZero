<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
  </nav>
</template>
<script>
  export default {
    name: 'Nav',
  };
</script>
<style>
    nav {
    margin-top: 25px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
  }
    a {
      font-weight: bold;
      color: #2c3e50;
    }
</style>