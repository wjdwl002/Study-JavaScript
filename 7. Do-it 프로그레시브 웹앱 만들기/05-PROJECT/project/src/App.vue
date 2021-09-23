<template>
  <div id="app">
  <h1>HELLO</h1>
  <router-view></router-view>
  <hr>
  <p>ROUTER LINK : 
  <router-link to="/main">MAIN PAGE </router-link>
  <router-link to="/sub">  SUB PAGE</router-link>
  </p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
