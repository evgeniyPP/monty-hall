<template>
  <div class="wrap">
    <img
      class="menu"
      src="../assets/images/menu.png"
      alt="menu icon"
      @click="menuToggle"
      v-if="menuShow"
    />
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
            :disabled="round !== 3"
          />
          <label class="range__num" for="range">{{ doors.length }}</label>
        </div>
        <div class="item checkboxWrap">
          <label for="checkbox" style="color: #ccc">Показывать вероятности?</label>
          <input type="checkbox" id="checkbox" v-model="isPercents" disabled />
        </div>
        <div v-if="round === 3" @click="restart">
          <Button style="background: #fff">Перезапустить</Button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Button from '../assets/Button.vue'

export default {
  name: 'settings',
  components: { Button },
  data() {
    return {
      isMenu: false,
      rangeValue: 3
    }
  },
  computed: {
    ...mapGetters(['round', 'doors', 'isPercents', 'isRestarted']),
    menuShow() {
      return this.round === 3 || this.isRestarted
    }
  },
  methods: {
    ...mapMutations(['changeRangeValue']),
    ...mapActions(['restartGame']),
    changeHandler(e) {
      this.rangeValue = e.target.value
      this.changeRangeValue(this.rangeValue)
    },
    menuToggle() {
      this.isMenu = !this.isMenu
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
  cursor: pointer;
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
  cursor: pointer;
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
