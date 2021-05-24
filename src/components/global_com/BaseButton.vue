<template>
  <button :type="type"><slot></slot></button>
</template>
<script>
export default {
  props: ["type", "title"],
};
</script>
<style scoped>
button {
  border-radius: 5px;
  font-size: 20px;
}
</style>