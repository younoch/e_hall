<template>
  <div>
    <landing-main></landing-main>
  </div>
</template>

<script>
import LandingMain from "./components/landing-page/LandingMain.vue";
export default {
  components: { LandingMain },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto";
}
</style>
