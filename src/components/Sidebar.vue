<template>
  <div class="wrapper">
    <Text1 v-if="round === 0" />
    <Text2 v-else-if="round === 2" />
    <Text3 v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Text1 from './Text/Text1'
import Text2 from './Text/Text2'
import Text3 from './Text/Text3'

export default {
  components: { Text1, Text2, Text3 },
  computed: {
    ...mapGetters(['round'])
  }
}
</script>

<style scoped>
.wrapper {
  z-index: 1001;
  height: calc(100vh - 6rem);
  background: #f0f0f0;
  border-left: 2px solid #ccc;
  padding: 3rem 2rem;
  padding-left: 3rem;
  max-width: 480px;
  text-align: left;
  font-size: 1.125rem;
  overflow: auto;
}

p {
  font-size: 1.25rem;
}

@media screen and (max-width: 1020px) {
  .wrapper {
    height: auto;
  }
}
</style>
