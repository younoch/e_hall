<template>
  <section>
    <p>Examinner: {{ examinerName }}</p>
    <p>Subject: {{ subject }}</p>
    <p>Time to begain: {{ time }}</p>
  </section>
</template>
<script>
// parant "main.js"
export default {
  props: ["examinerName", "subject", "time"],
};
</script>
<style scoped>
section {
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
}
</style>