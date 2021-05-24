<template>
  <section>
    <aside-basecard>
      <div>
        <h1>The Esam Rules and Regualtions</h1>
      </div>
      <ul>
        <li>
          <font-awesome-icon icon="gavel" class="icon" />
          Don't swithch to any other screen. If you do that the current question
          will terminate.
        </li>
        <li>
          <font-awesome-icon icon="gavel" class="icon" />
          Each question has between 2 to 8 options; one or more ansewer may
          correct.
        </li>
        <li>
          <font-awesome-icon icon="gavel" class="icon" />
          In order to pass, you will need to answer at least 40% of the
          questions correctly.
        </li>
        <li>
          <font-awesome-icon icon="gavel" class="icon" />
          This test best view in Google Chrome 48 or higher on desktop version.
        </li>
        <li>
          <font-awesome-icon icon="gavel" class="icon" /> You can't participate
          one more times with same device
        </li>
        <li>
          <font-awesome-icon icon="gavel" class="icon" /> The result will
          published, the shedule will over
        </li>
      </ul>
      
    </aside-basecard>
  </section>
</template>
<script>
import AsideBasecard from "./AsideBasecard.vue";
export default {
  components: { AsideBasecard },
};
</script>
<style scoped>
section {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>