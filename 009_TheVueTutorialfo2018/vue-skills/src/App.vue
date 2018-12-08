<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Skill skillObj={
      msg:'Hello World you',
      btnState:true
    }/> -->

    <Skill></Skill>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Skill from './components/Skill.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Skill
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
