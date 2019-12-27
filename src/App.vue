<template>
  <div id="app" :class="{ win, lose }">
    <Settings />
    <Game />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Settings from './components/Settings.vue'
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: { Settings, Game },
  computed: {
    ...mapGetters(['round', 'result']),
    win() {
      return this.round === 3 && this.result === 'win'
    },
    lose() {
      return this.round === 3 && this.result === 'lose'
    }
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

#app {
  flex-grow: 1;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 15px solid transparent;
}
.win {
  border-color: green !important;
}
.lose {
  border-color: red !important;
}
</style>
