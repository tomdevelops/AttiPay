<template>
  <footer>
    <div></div>
    <div class="button">
      <button>Buy {{ total }} CHF</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      total: "0.00",
    };
  },
  mounted() {
    const that = this;
    document.addEventListener("ontotalvaluechange", function (event) {
      console.log("Total received: ", event.detail);
      that.total = event.detail;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  position: fixed;
  bottom: 20px;
  right: 50px;
}
button {
  background: #1a705b;
  border: #1a705b;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 10px;
}
</style>
