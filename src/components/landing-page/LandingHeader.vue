<template>
  <header>
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
        alt="Not found"
      />
      <p class="title">E-Test</p>
    </div>
    <ul>
      <li><button>Source Code</button></li>
      <li><button>Rules</button></li>
      <li><button>Signup</button></li>
    </ul>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  background: royalblue;
  height: 40px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  padding: 5px 20px;
  height: 100%;
  display: inline-flex;
  align-items: center;
}
img {
  height: 30px;
}
.title {
  display: inline-flex;
  font: 22px;
  color: white;
  justify-content: center;
  padding: 5px 20px;
  font-weight: 700;
}
ul {
  /* float: right; */
  float: right;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: right;
  height: 100%;
}
li {
  border: none;
}
button {
  border: none;
  background: royalblue;
  min-width: 130px;

  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 5px 20px;
  height: 100%;
}

button:hover {
  background: white;
  color: royalblue;
}
</style>