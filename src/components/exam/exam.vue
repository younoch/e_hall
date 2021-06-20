<template >
  <router-view @click.once="questionSelection"></router-view>
</template>
<script>
export default {
/*   provide() {
    return {
      subjectIndex: this.subjectIn
    };
  }, */

  methods: {
    questionSelection() {
      this.$store.commit({
        type: 'storeSelectedExam',
        //value: this.subjectIn
      })
    },
  },
};
</script>