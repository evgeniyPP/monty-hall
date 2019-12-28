<template>
  <div class="grid">
    <div v-for="(door, index) in doors" :key="index" @click="doorPicked(index)">
      <template v-if="!door.opened">
        <img class="door doorClosed" src="../assets/images/door-closed.png" alt="door closed" />
      </template>

      <div v-else class="openedWrap">
        <img class="door doorOpened" src="../assets/images/door-opened.png" alt="door opened" />
        <img class="price price1" v-if="door.win" src="../assets/images/auto.png" alt="" />
        <img class="price price2" v-else src="../assets/images/goat.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'game',
  computed: {
    ...mapGetters(['doors', 'round'])
  },
  methods: {
    ...mapMutations(['round1', 'round2']),
    ...mapActions(['game']),
    doorPicked(index) {
      this.game(index)
    }
  }
}
</script>

<style lang="less">
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.door {
  max-width: 100%;
  cursor: pointer;
}

.doorClosed {
  width: 200px;
  margin: 1rem 4rem;
}

.doorOpened {
  width: 290px;
  margin: 1rem;
}

.openedWrap {
  display: flex;
  position: relative;
}

.price {
  max-width: 100%;
  position: absolute;
  z-index: -1;
}

.price1 {
  width: 180px;
  bottom: 20px;
  right: 118px;
}

.price2 {
  width: 150px;
  bottom: 45px;
  right: 130px;
}

@media screen and (max-width: 360px) {
  .doorClosed {
    width: 180px;
    margin: 1rem 2rem;
  }
  .price1 {
    bottom: 20px;
    right: calc(118px - (360px - 100vw));
  }

  .price2 {
    bottom: 45px;
    right: calc(130px - (360px - 100vw));
  }
}
</style>
