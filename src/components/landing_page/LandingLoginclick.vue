   <template>
  <div>
    <h1>{{ headMsg }}</h1>
    <button @click="switchStutus">{{ buttonMsg }}</button>
  </div>
</template>
   <script>
export default {
  data() {
    return {};
  },
  props: ["headMsg", "buttonMsg"],
  methods: {
    switchStutus() {
      this.$emit("switch-stutus");
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  color: #d6fbff;
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
}
button {
  background-color: #d6fbff;
  color: #274b7f;
}
</style>