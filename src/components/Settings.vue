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
          <label for="checkbox">Показывать вероятности?</label>
          <input type="checkbox" id="checkbox" v-model="isPercents" />
        </div>
        <button class="item" @click="start">Начать</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'settings',
  data() {
    return {
      isMenu: true
    }
  },
  computed: {
    ...mapGetters(['doors', 'isPercents'])
  },
  methods: {
    ...mapMutations(['changeRangeValue', 'startGame']),
    changeHandler(e) {
      this.changeRangeValue(e.target.value)
    },
    menuToggle() {
      this.isMenu = !this.isMenu
    },
    start(e) {
      this.startGame(e)
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
</style>
