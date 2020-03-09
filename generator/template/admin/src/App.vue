<template>
  <div id="app">
    <v-container id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/users">Users</router-link>
    </v-container>
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
