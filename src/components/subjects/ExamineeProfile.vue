<template>
  <div>
    <aside-basecard>
      <section class="user-part1">
        <font-awesome-icon icon="user" class="icon" />
        <p class="heading1">USER PROFILE</p>
        <p class="name">{{ name }}</p>
        <p>ID: {{ id }}</p>
        <p>Batch: {{ batch }}</p>
        <p>Dept: {{ dept }}</p>
        <p>
          Cox's Bazar International <br />
          University
        </p>
      </section>
      <section>
        <p class="heading2">History</p>
        <p>Attend Exam: {{ att }}</p>
        <p>Missed Exam: {{ miss }}</p>
      </section>
    </aside-basecard>
  </div>
</template>

<script>
import AsideBasecard from "../global_com/AsideBasecard.vue";
//Paranent "SubjectList.vue"
export default {
  components: { AsideBasecard },
  data() {
    return {
      name: "Mohammad Younoch",
      id: "190072300069",
      batch: "E7",
      dept: "CSE",
      att: "01",
      miss: "00",
    };
  },
};
</script>
<style scoped>
div {
  margin-right: 8px;
  width: max-content;
}
p {
  text-align: center;
  color: white;
}
.user-part1 {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  color: white;
  font-size: 60px;
}
.heading1 {
  color: #89c4e5;
  font-size: 160%;
  margin: 10px 20px;
  font-weight: 900;
}
.heading2 {
  font-size: 120%;
  margin: 20px 0 5px;
  font-weight: 700;
}
.name {
  color: yellowgreen;
  font-size: 120%;
  font-weight: 700;
  margin: 5px;
}
</style>