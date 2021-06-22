<template>
  <router-view></router-view>
</template>
<script>
export default {
  provide() {
    return {
      subjectIndex: this.subjectIn,
    };
  },
  data() {
    return {
      subjectIn: this.$store.state.saveIndex,
    };
  },
};
</script>
