<template>
  <router-link to="/subjects/exam_rule">
    <section>
      <p>
        <font-awesome-icon icon="user-tie" class="icon" />
        &nbsp;{{ examinerName }}
      </p>
      <p>
        <font-awesome-icon icon="file-alt" class="icon" /> &nbsp; {{ subject }}
      </p>
      <p>
        <font-awesome-icon icon="graduation-cap" class="icon" />&nbsp;{{
          batch
        }}
      </p>
      <p>
        <font-awesome-icon icon="stopwatch" class="icon" /> &nbsp;{{ time }}
      </p>
    </section>
  </router-link>
</template>
<script>
// parant "main.js"
export default {
  props: ["examinerName", "subject", "batch", "time"],
};
</script>
<style scoped>
a {
  text-decoration: none;
}
section {
  margin: 2px 5px;
  color: white;
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
}
p {
  margin: 1px;
}
.icon {
  color: yellowgreen;
}
</style>