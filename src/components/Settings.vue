<template>
  <div class="wrap">
    <img class="menu" src="../assets/images/menu.png" alt="menu icon" @click="menuToggle" />
    <transition name="fade">
      <div class="settings" v-if="isMenu">
        <div class="item rangeWrap">
          <label for="range">Выберите количество дверей:</label>
          <input
            id="range"
            type="range"
            min="3"
            max="12"
            @change="changeHandler"
            :value="doors.length"
          />
          <label class="range__num" for="range">{{ doors.length }}</label>
        </div>
        <div class="item checkboxWrap">
          <label for="checkbox" style="color: #ccc">Показывать вероятности?</label>
          <input type="checkbox" id="checkbox" v-model="isPercents" disabled />
        </div>
        <button v-if="round === 0" @click="start">Начать</button>
        <button v-else @click="restart">Перезапустить</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'settings',
  data() {
    return {
      isMenu: true,
      rangeValue: 3
    }
  },
  computed: {
    ...mapGetters(['round', 'doors', 'isPercents'])
  },
  methods: {
    ...mapMutations(['changeRangeValue', 'startGame']),
    ...mapActions(['restartGame']),
    changeHandler(e) {
      this.rangeValue = e.target.value
      this.changeRangeValue(this.rangeValue)
    },
    menuToggle() {
      this.isMenu = !this.isMenu
    },
    start(e) {
      this.startGame(e)
      this.menuToggle()
    },
    restart() {
      this.restartGame(this.rangeValue)
      this.menuToggle()
    }
  }
}
</script>

<style scoped>
.wrap {
  position: fixed;
  z-index: 1000;
  top: 5px;
  left: 5px;
}

.menu {
  max-width: 100%;
  width: 50px;
}

.settings {
  display: inline-block;
  position: absolute;
  background: #fff;
  top: 60px;
  left: 5px;
  min-width: 320px;
  padding: 1.5rem 2rem;
  text-align: left;
  border: 1px solid #ccc;
}

.item {
  margin: 0.5rem 0;
  font-weight: bold;
}

label {
  margin-right: 0.5rem;
}

#range {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

.range__num {
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

button {
  color: #2c3e50;
  font-weight: bold;
  text-transform: uppercase;
  background: #fff;
  padding: 0.85rem 1rem 0.75rem 1rem;
  border: 2px solid #2c3e50;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  margin-top: 1.5rem;
}

button:hover {
  border-radius: 50px;
  transition: all 0.3s ease 0s;
}
</style>
