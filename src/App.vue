<template>
  <div id="app" :class="{ win, lose }">
    <Settings />
    <Game />
    <transition name="fade">
      <Sidebar class="sidebar" v-if="showSidebar" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Settings from './components/Settings.vue'
import Game from './components/Game.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: { Settings, Game, Sidebar },
  computed: {
    ...mapGetters(['round', 'result', 'showSidebar']),
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
  border: 20px solid transparent;
  border-top-width: 25px;
  border-bottom-width: 25px;
}
.win {
  border-color: green !important;
}
.lose {
  border-color: red !important;
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
