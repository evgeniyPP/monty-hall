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
    result: null
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
      const arr = [...state.doors]
      arr[index].opened = true
      state.doors = arr
    },
    startGame(state) {
      const random = randomize(state.doors.length)
      const arr = [...state.doors]
      arr[random].win = true
      state.doors = arr
      state.round = 1
    },
    round1(state, index) {
      if (state.doors[index].win) {
        const random = randomize(state.doors.length)
        const checkRandom = num => {
          if (num === index) {
            random = randomize(state.doors.length)
            checkRandom(random)
          }
        }
        checkRandom(random)
        state.doors = state.doors.map((door, i) => {
          return i === index || i === random ? door : { ...door, opened: true }
        })
      } else {
        state.doors = state.doors.map((door, i) => {
          return i === index || door.win ? door : { ...door, opened: true }
        })
      }
      state.round = 2
    },
    round2(state, index) {
      const arr = [...state.doors]
      arr[index].opened = true
      state.doors = arr
      state.round = 3
    },
    gameOver(state, index) {
      state.doors[index].win ? (state.result = 'win') : (state.result = 'lose')
    }
  },
  actions: {
    game(store, index) {
      switch (store.state.round) {
        case 1:
          store.commit('round1', index)
          break
        case 2:
          store.commit('round2', index)
          store.commit('gameOver', index)
          break
        default:
          null
      }
    }
  }
})
