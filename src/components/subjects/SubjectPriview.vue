<template>
  <aside-basecard>
    <h1>LIST OF SUBJECTS</h1>
    <ul>
      <li v-for="examList in examLists" :key="examList.id">
        <each-subject
          :examinerName="examList.name"
          :subject="examList.subject"
          :time="examList.time"
        ></each-subject>
      </li>
    </ul>
  </aside-basecard>
</template>

<script>
export default {
  data() {
    return {
      examLists: [
        {
          id: 1,
          name: "Annandip",
          subject: "Algorithom",
          time: "123h 34min",
        },
        {
          id: 2,
          name: "Titow",
          subject: "Microprocesor",
          time: "127h 12min",
        },
        {
          id: 3,
          name: "Fisal",
          subject: "Fiber Optics",
          time: "103h 07min",
        },
        {
          id: 4,
          name: "Nasrin",
          subject: "Artificial Int",
          time: "123h 98min",
        },
        {
          id: 5,
          name: "Syed",
          subject: "Electrical Lab",
          time: "23h 04min",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #89c4e5;
  text-align: center;
  font-size: 180%;
  margin: 20px;
  font-weight: 900;
}
ul {
  margin: 20px 20px;
  display: grid;
  grid-auto-rows: repeat(2, 90px);
  grid-template-columns: repeat(3, 1fr);
  /* 
  grid-row-gap: 5px; 
  grid-column-gap: 10px;
  */
  grid-gap: 10px 10px;
}
li {
  list-style: none;
  margin: 0;
  background-color: #4056a1;
  border-radius: 8px;
  border: ridge 1px snow;
}
</style>