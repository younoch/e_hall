<template>
  <router-link :to="`/${id }/exam_rule`" @click = 'clickedSubject'>
    <section>
      <p>
        <font-awesome-icon icon="user-tie" class="icon" />
         &nbsp;{{ examinerName }} <!-- $store.state.examList.name -->
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
  props: ["id","examinerName", "subject", "batch", "time"],
  methods: {
    clickedSubject() {
      this.$store.state.selectedExam = this.id;
    }
  },
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