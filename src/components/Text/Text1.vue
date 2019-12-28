<template>
  <div>
    <h1>Парадокс Монти Холла</h1>
    <p>Давайте сыграем в одну игру.</p>
    <p>
      Перед Вами три двери. За одной из них новенький автомобиль. За двумя другими – козы.
    </p>
    <p>
      Выберите ту, за которой автомобиль, выиграете автомобиль, выберите дверь, за которой коза –
      выиграете... козу.
    </p>
    <p>
      Удачи!
    </p>
    <p><em>Я лично знаю, за какой дверью авто, но Вам не скажу.</em></p>
    <p>
      Чтобы запустить игру, нажмите <b>"Начать"</b>.<br />
      Если Вы уже всё знаете про этот парадокс и пришли поиграться, нажмите
      <b>"Пропустить объяснение"</b>.
    </p>
    <div @click="startGame">
      <Button>Начать</Button>
    </div>
    <div @click="skip">
      <Button class="skipBtn">Пропустить объяснение</Button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Button from '../../assets/Button.vue'

export default {
  components: { Button },
  methods: {
    ...mapMutations(['startGame']),
    ...mapActions(['restartGame']),
    skip() {
      this.restartGame(3)
    }
  }
}
</script>

<style>
.skipBtn {
  margin-top: 1rem;
}
</style>
