import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const randomize = max => Math.floor(Math.random() * max)

export default new Vuex.Store({
  state: {
    doors: [
      { opened: false, win: false },
      { opened: false, win: false },
      { opened: false, win: false }
    ],
    isPercents: false,
    round: 0,
    result: null,
    pickedDoor: null,
    doorSwaped: null,
    showSidebar: true,
    isRestarted: false
  },
  getters: {
    doors(state) {
      return state.doors
    },
    isPercents(state) {
      return state.isPercents
    },
    round(state) {
      return state.round
    },
    result(state) {
      return state.result
    },
    doorSwaped(state) {
      return state.doorSwaped
    },
    showSidebar(state) {
      return state.showSidebar
    },
    isRestarted(state) {
      return state.isRestarted
    }
  },
  mutations: {
    changeRangeValue(state, value) {
      state.result = null
      const arr = []
      for (let i = 0; i < value; i++) {
        arr.push({ opened: false, win: false })
      }
      state.doors = arr
    },
    startGame(state) {
      const random = randomize(state.doors.length)
      const arr = [...state.doors]
      arr[random].win = true
      state.doors = arr
      state.round = 1
      state.showSidebar = false
    },
    round1(state) {
      if (state.doors[state.pickedDoor].win) {
        const random = randomize(state.doors.length)
        const checkRandom = num => {
          if (num === state.pickedDoor) {
            random = randomize(state.doors.length)
            checkRandom(random)
          }
        }
        checkRandom(random)
        state.doors = state.doors.map((door, i) => {
          return i === state.pickedDoor || i === random ? door : { ...door, opened: true }
        })
      } else {
        state.doors = state.doors.map((door, i) => {
          return i === state.pickedDoor || door.win ? door : { ...door, opened: true }
        })
      }
      state.showSidebar = false
    },
    round2(state) {
      state.doors = state.doors.map(door => {
        return { ...door, opened: true }
      })
      state.showSidebar = false
      state.doors[state.pickedDoor].win ? (state.result = 'win') : (state.result = 'lose')
    }
  },
  actions: {
    game(store, index) {
      if (!store.state.isRestarted) {
        switch (store.state.round) {
          case 1:
            store.state.round = 2
            store.state.pickedDoor = index
            store.state.showSidebar = true
            break
          case 2:
            store.state.round = 3
            store.state.doorSwaped = store.state.pickedDoor !== index
            store.state.pickedDoor = index
            store.state.showSidebar = true
            break
          default:
            null
        }
      } else {
        switch (store.state.round) {
          case 1:
            store.state.pickedDoor = index
            store.commit('round1')
            store.state.round = 2
            break
          case 2:
            store.state.round = 3
            store.state.doorSwaped = store.state.pickedDoor !== index
            store.state.pickedDoor = index
            store.commit('round2')
            break
          default:
            null
        }
      }
    },
    restartGame(store, rangeValue) {
      store.commit('changeRangeValue', rangeValue)
      store.commit('startGame')
      store.state.isRestarted = true
    }
  }
})
