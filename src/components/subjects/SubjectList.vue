<template>
  <section>
    <div>
      <examinee-profile></examinee-profile>
      <subject-priview> </subject-priview>
    </div>
  </section>
</template>

<script>
import ExamineeProfile from "./ExamineeProfile.vue";
import SubjectPriview from "./SubjectPriview.vue";
export default {
  components: { ExamineeProfile, SubjectPriview },
};
</script>

<style scoped>
section {
  width: 80vw;
}
div {
  display: flex;
  justify-content: left;
  align-items: stretch;
  height: calc(100vh - 80px);
}
</style>