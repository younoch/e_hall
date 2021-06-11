<template>
  <aside-basecard>
    <h1>LIST OF SUBJECTS</h1>
    <ul>
      <li v-for="examList in $store.state.examLists" :key="examList.id">
        <each-subject
          :id ="examList.id"
          :examinerName="examList.name"
          :subject="examList.subject"
          :batch="examList.batch"
          :time="examList.time"
        ></each-subject>
        
      </li>
    </ul>
  </aside-basecard>
</template>

<script>
export default {
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