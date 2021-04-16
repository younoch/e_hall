<template>
  <landing-header class="header_position"></landing-header>

  <section>
    <main>
      <landing-loginclick class="landing-signclick"></landing-loginclick>
      <landing-signup class="landing-signup"></landing-signup>
    </main>
  </section>
</template>

<script>
//Componnents
import LandingHeader from "./LandingHeader.vue";
import LandingSignup from "./LandingSignup.vue";
import LandingLoginclick from "./LandingLoginclick.vue";
//Assets

export default {
  components: { LandingLoginclick, LandingHeader, LandingSignup },
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
main {
  width: 80%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
}
.landing-signclick {
  width: 50%;
  float: left;
  height: 100%;
  background-color: #274b7f;
}
.landing-signup {
  width: 50%;
  float: right;
  height: 100%;
  background-color: #89c4e5;
}
.header_position {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
img {
  width: 100%;
  height: 100%;
}
</style>