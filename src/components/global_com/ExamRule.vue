<template>
  <section>
    <aside-basecard class="basecard">
      <div>
        <h1>The Esam Rules and Regualtions</h1>
      </div>
      <ul>
        <li v-for="examRule in examRules" :key="examRule">
          <font-awesome-icon icon="gavel" class="icon" /> {{ examRule }}
        </li>
      </ul>
      <p>Times to go!!</p>
      <button>
        <router-link :to="`/${selectedExam}/0`">Start now</router-link>
      </button>
    </aside-basecard>
  </section>
</template>
<script>
//Parent src\components\exam\exam.vue
import AsideBasecard from "./AsideBasecard.vue";
export default {
  components: { AsideBasecard },
  data() {
    return {
      examRules: [
        `Don't swithch to any other screen. If you do that the current question will terminate.`,
        `Each question has between 2 to 8 options; one or more ansewer may correct.`,
        `In order to pass, you will need to answer at least 40% of the questions correctly.`,
        `This test best view in Google Chrome 48 or higher on desktop version.`,
        `You can't participate one more times with same device`,
        `The result will published, the shedule will over`,
      ],
      tr: "each_questio",
    };
  },
  computed: {
    selectedExam() {
      console.log(this.$store.state.saveIndex);
      return this.$store.state.selectedExam;
    },
  },
  methods: {},
};
</script>
<style scoped>
section {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  min-height: 500px;
}
div {
  background: #89c4e5;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
}
h1 {
  text-align: center;
  color: #274b7f;
}
ul {
  text-align: left;
  margin: 10px;
  font-size: 120%;
}
li {
  list-style-type: none;
  text-align: left;
  color: white;
  margin: 3px;
}
.basecard {
  position: relative;
}
button {
  position: absolute;
  bottom: 10px;
}
a {
  text-decoration: none;
  color: #274b7f;
}
</style>
