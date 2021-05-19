<template>
  <section>
    <slot></slot>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
section {
  border: 3px solid double dotted grey;
  border-radius: 10px;
  background: #274b7f;
  width: inherit;
  padding: 10px;
  box-shadow: 3px 2px 10px #242526;
}
</style>