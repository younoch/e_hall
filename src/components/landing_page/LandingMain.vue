<template>
  <section>
    <!-- <img src="../../assets/Summer_32.jpg" alt="" /> -->
    <main>
      <landing-loginclick
        class="landing-signclick"
        :class="switch1 ? 'pos-left' : 'pos-right'"
        :headMsg="switch1 ? headMsgArr[0] : headMsgArr[1]"
        :buttonMsg="switch1 ? buttonMsgArr[0] : buttonMsgArr[1]"
        @switchStutus="headMgsSwitch"
      ></landing-loginclick>

      <landing-signup
        class="landing-signup"
        :class="switch1 ? 'pos-right' : 'pos-left'"
        :formSwitch="switch1"
      ></landing-signup>
    </main>
  </section>
</template>

<script>
//Componnents
import LandingSignup from "./LandingSignup.vue";
import LandingLoginclick from "./LandingLoginclick.vue";
//Assets

export default {
  components: { LandingLoginclick, LandingSignup },
  data() {
    return {
      headMsgArr: ["Welcome Back!", "Hey, Join Here"],
      buttonMsgArr: ["Sign in", "Signup"],
      switch1: false,
    };
  },
  watch: {
    switch1(value) {
      if (value) {
        1;
      } else {
        2;
      }
    },
  },
  methods: {
    headMgsSwitch() {
      this.switch1 = !this.switch1;
    },
  },
};
</script>

<style scoped>
section {
  width: 100vw;
  height: calc(100vh - 50px);
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
  box-shadow: 3px 2px 10px #242526;
}
.landing-signclick {
  width: 44.85%;
  height: 100%;
  background-color: #274b7f;
}
.landing-signup {
  width: 55%;
  transition-property: all;
  transition-duration: 8s;
  height: 100%;
  background-color: #89c4e5;
}

img {
  width: 100%;
  height: 100%;
}
.pos-left {
  transition: all 8s ease-in 0.3s;
  float: left;
}
.pos-right {
  transition: all 8s ease-in;
  float: right;
}
</style>