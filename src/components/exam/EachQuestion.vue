<template>
  <section>
    <aside-basecard class="base">
      <p>Time: 29 secs</p>
      <h2>Question: {{ question }}</h2>
      <form action="">
        <div v-for="(option, index) in options" :key="index">
          <input type="radio" name="opt:1" id="opt:1" />
          <label for="opt:1">{{ index + 1 }}. {{ option }}</label
          ><br />
        </div>
        <router-link :to="nextLink">
          <button type="submit" @click="nextQuestion">Next</button>
        </router-link>
      </form>
    </aside-basecard>
  </section>
</template>
<script>
export default {

  //Provided from ..\e_hall\src\components\exam\exam.vue
  //inject: ['subjectIndex'],

  data() {
    return {
      quesId: Number(this.$route.params.each_question),
      subjectIndex: this.$store.state.saveIndex,
      numberOfQuestion: this.$store.state.questions[this.subjectIndex].data.length,
      question: this.$store.state.questions[this.subjectIndex].data[0].que,
      options: this.$store.state.questions[this.subjectIndex].data[0].options,
      nextLink: "",
    };
  },

  watch: {
    quesId(value) {
      //this.$route.params.each_question = value;
      this.question = this.$store.state.questions[this.subjectIndex].data[value].que;
      this.options =
        this.$store.state.questions[this.subjectIndex].data[value].options;
        
    },
  },

  methods: {
    nextQuestion() {
      let key = false;
      if (this.quesId < this.numberOfQuestion - 1) {
        this.quesId++;
      } else key = true;
      const quesId = this.quesId;
      if (key) {
        this.nextLink = `/${this.selectedExam}/result`;
      } else this.nextLink = `/${this.selectedExam}/${quesId}`;
      console.log(this.subjectIndex);
      /* 
      console.log(this.$store.state.selectedExam);
      console.log(this.$store.state.questions); */
    },
  },
};
</script>
<style scoped>
section {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.base {
  width: 80%;
  height: 80vh;
  color: aliceblue;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 40px;
  text-align: center;
}
p {
  font: 1em sans-serif;
}
button {
  color: #4056a1;
}
</style>