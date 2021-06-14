<template>
  <aside-basecard class="base">
      <h2>Hey, Younoch</h2>
    <h1>Congratulation!!!</h1>
    <h2>Your score is 7/10</h2>
    <p>Back to Home?</p>
    <router-link to="/subjects">
      <button><span>Home</span> </button>
    </router-link>
  </aside-basecard>
</template>
<script>
export default {};
</script>
<style scoped>
.base {
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  color: tomato;
}
h2 {
  color: yellowgreen;
}
p {
    color: white;
}
button {
    background: #89c4e5;
}
span {
    color: #274b7f;
}
</style>