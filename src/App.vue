<template>
  <div id="app">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
html,
body {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
