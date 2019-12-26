<template>
  <div>
    <button @click="startGame">Начать</button>
    <label for="range">Выберите количество дверей</label>
    <input id="range" type="range" min="3" max="12" @change="changeHandler" :value="doors.length" />
    <label for="range">{{ doors.length }}</label>
    <label for="checkbox">Показывать вероятности?</label>
    <input type="checkbox" id="checkbox" v-model="isPercents" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'settings',
  computed: {
    ...mapGetters(['doors', 'isPercents'])
  },
  methods: {
    ...mapMutations(['changeRangeValue', 'startGame']),
    changeHandler(e) {
      this.changeRangeValue(e.target.value)
    }
  }
}
</script>

<style lang="less"></style>
