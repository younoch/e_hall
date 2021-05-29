<template>
  <div>
    <the-header></the-header>
    <router-view class="default"></router-view>
  </div>
</template>

<script>
export default {};
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
.default {
  margin: 0 auto;
}
</style>
