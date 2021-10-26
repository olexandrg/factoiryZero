<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <img alt="factory logo" src="../assets/logo.png">
    <div class="navbar-start">
        <router-link to="/">Home</router-link>
        <router-link to="/tech">Technician</router-link>
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
    background-color: #fefae0;
    margin-bottom: 30px;
    border-bottom: none; 
    display: grid;
    justify-content: center;
}
.navbar-start {
    padding-bottom: 0.2em;
}
a {
    background-color: #2A9D8F;
    color: whitesmoke;
    padding: 0.2em;
    text-decoration: none;
    border: 1px solid #264653;
}
a:hover {
    color: #cccccc;
    cursor:pointer;
}
img {
  align-items: flex-start;
}
</style>