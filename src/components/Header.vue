<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" />
      <h1>AttiPay</h1>
    </div>
    <div class="time">{{ timestamp }}</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      timestamp: this.formatDate(new Date()),
    };
  },
  mounted() {
    this.updateTS();
    setInterval(this.updateTS.bind(this), 1000);
  },
  methods: {
    updateTS() {
      this.timestamp = this.formatDate(new Date());
    },
    formatDate(date) {
      var d = new Date(date),
        month = (month = d.toLocaleString("DE", { month: "long" })),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes();

      if (day.length < 2) day = "0" + day;
      if (hour.length < 2) hour = "0" + hour;
      if (minute.length < 2) minute = "0" + minute;

      return `${day}. ${month} ${year} ${hour}:${minute}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #1a705b;
  color: white;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  padding: 0px 70px;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 30px;
  width: auto;
  align-self: center;
  margin-right: 10px;
}
.logo h1 {
  height: 30px;
  width: auto;
  align-self: center;
}
.time {
  align-self: center;
}
</style>
