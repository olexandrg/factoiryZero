<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <img alt="factory logo" src="../assets/logo.png">
    <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/about" class="navbar-item">Lorem</router-link>
        <router-link to="/about" class="navbar-item">Ipsum</router-link>
     </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
  };
</script>

// Style
<style>
nav {
    background-color: #fefae0;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
    display: grid;
    /* align-items: flex-start; */
    justify-content: center;
}
a {
    font-weight: bold;
    color: #2c3e50;
}
router-link {
    padding: 5px;
}
router-link:hover {
    color: gray;
    cursor:pointer;
}
img {
  align-items: flex-start;
}
</style>