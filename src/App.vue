<template>
  <div id="app">
    <Settings />
    <Game />
  </div>
</template>

<script>
import Settings from './components/Settings.vue'
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: { Settings, Game }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
