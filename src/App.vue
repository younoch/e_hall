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
button {
  font-size: 17px;
  padding: 8px 12px !important;
  border-radius: 11px !important;
  font-weight: 700 !important;
  min-width: 150px;
  border: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
