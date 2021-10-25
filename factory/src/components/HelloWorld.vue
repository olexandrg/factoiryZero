<template>
  <div class="hello">
    <!-- leave alone -->
    <nav class="master">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </nav>
    <!-- login stuff -->
    <div class="login">
      <p>Username: </p>
      <p>Password: </p>
    </div>
    <!-- TODO: add footer -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master {
  display: grid;
  /* align-items: flex-start; */
  justify-content: center;
}
.login {
  display: grid;
  padding: 2em;
  border: 1px solid black;
  border-radius: 0.5em;
  justify-content: center;
  margin: 0 auto; /* centers the div */
  max-width: 16em;
  background-color: #f1faee;
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
