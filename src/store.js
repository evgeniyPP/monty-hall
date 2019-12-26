import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doors: [
      { opened: false, win: false },
      { opened: false, win: false },
      { opened: false, win: false }
    ],
    isPercents: false,
    isStarted: false
  },
  getters: {
    doors(state) {
      return state.doors
    },
    isPercents(state) {
      return state.isPercents
    }
  },
  mutations: {
    changeRangeValue(state, value) {
      const arr = []
      for (let i = 0; i < value; i++) {
        arr.push({ opened: false, win: false })
      }
      state.doors = arr
    },
    openDoor(state, index) {
      if (state.isStarted) {
        const arr = [...state.doors]
        arr[index].opened = true
        state.doors = arr
      }
    },
    startGame(state) {
      const random = Math.floor(Math.random() * state.doors.length)
      const arr = [...state.doors]
      arr[random].win = true
      state.doors = arr
      state.isStarted = true
    }
  },
  actions: {}
})
