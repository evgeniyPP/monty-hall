<template>
  <div>
    <h1>Парадокс Монти Холла</h1>
    <p>Хорошо, Вы выбрали одну из дверей.</p>
    <p>
      Я не буду открывать её сразу. Вместо этого я открою другую дверь, за которой, я знаю, нет
      автомобиля.
    </p>
    <p>
      Теперь я предлагаю Вам поменять дверь. Согласны? Вам решать.
    </p>
    <div @click="round1">
      <Button>Продолжить</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Button from '../../assets/Button.vue'

export default {
  components: { Button },
  computed: {
    ...mapGetters(['doors'])
  },
  methods: {
    ...mapMutations(['round1'])
  }
}
</script>

<style></style>
