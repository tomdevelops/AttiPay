import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log("hello world")

new Vue({
  render: h => h(App),
}).$mount('#app')
