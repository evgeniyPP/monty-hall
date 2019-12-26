<template>
  <div>
    <img
      v-if="!door"
      class="door doorClosed"
      src="../assets/images/door-closed.png"
      alt="door closed"
    />
    <img v-else class="door doorOpened" src="../assets/images/door-opened.png" alt="door opened" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
