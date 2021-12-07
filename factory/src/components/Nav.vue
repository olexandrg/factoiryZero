<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <img alt="factory logo" src="../assets/logo.png">
    <div class="navbar-start" >
        <router-link to="/">Home</router-link>
        <router-link to="/tech" v-if="$auth.isAuthenticated">Technician</router-link>
        <router-link to="/engineer" v-if="$auth.isAuthenticated">Engineer</router-link>
        <router-link to="/writer" v-if="$auth.isAuthenticated">Technical Writer</router-link>
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
    background-color: whitesmoke;
    margin-bottom: 30px;
    border-bottom: 1px solid #264653; 
    display: grid;
    justify-content: center;
}
.navbar-start {
    padding-bottom: 0.2em;
}
.navbar-start a {
    background-color: #2A9D8F;
    color: whitesmoke;
    padding: 0.2em;
    text-decoration: none;
    border-style: solid;
    border-color: #264653;
    border-width: 1px 1px 0 1px;
}
a:hover {
    color: #cccccc;
    cursor:pointer;
}
img {
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>