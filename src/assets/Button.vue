<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style>
button {
  color: #2c3e50;
  font-weight: bold;
  text-transform: uppercase;
  background: transparent;
  padding: 0.85rem 1rem 0.75rem 1rem;
  border: 2px solid #2c3e50;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  margin-top: 1.5rem;
  cursor: pointer;
}

button:hover {
  border-radius: 50px;
  transition: all 0.3s ease 0s;
}
</style>
