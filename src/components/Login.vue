<template>
  <div class="hello">
    <!-- leave alone -->
    <h1>{{ msg }}</h1>

    <!-- login stuff -->
    <div class="login">
      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <button class="home_button" v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <!-- show logout when authenticated -->
        <button class="home_button" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
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

<style>
.login {
  display: grid;
  padding: 2em;
  border: 1px solid whitesmoke;

  /* border-radius: 0.5em; */
  justify-content: center;
  margin: 0 auto; /* centers the div */
  max-width: 16em;
  /* background-color: #ade8f4; */
}
.home_button {
  border: none;
  padding: 0 20px;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  text-transform: uppercase;
  background-color: #57b846;
  color: whitesmoke;
  transition: all 0.4s;
  font-family: 'Ubuntu';
}
.home_button:hover {
  cursor: pointer;
  background-color: #1b3815;
}
</style>
