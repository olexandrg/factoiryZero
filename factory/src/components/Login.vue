<template>
  <div class="hello">
    <!-- leave alone -->
    <h1>{{ msg }}</h1>

    <!-- login stuff -->
    <div class="login">
      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <!-- show logout when authenticated -->
        <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
      // TODO: redirect to engineering dashboard
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login {
  display: grid;
  padding: 2em;
  border: 1px solid black;
  border-radius: 0.5em;
  justify-content: center;
  margin: 0 auto; /* centers the div */
  max-width: 16em;
  background-color: #ade8f4;
}
h1 {
  padding-left: 1em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
