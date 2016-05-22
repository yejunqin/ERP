<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!--<hello></hello>-->
    <a v-link="{name: 'test'}" class="link">跳转到test</a>
    <a v-link="{name: 'hello'}" class="link">跳转到hello</a>
    <p>hi</p>
    <router-view></router-view>
  </div>
</template>

<script>
//import Hello from './components/Hello'

export default {
//  components: {
//    Hello
//  },
  replace: false
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
