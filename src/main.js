import Vue from 'vue'
import App from './App.vue'
import Maska from 'maska'

Vue.config.productionTip = false

Vue.use(Maska)

new Vue({
  render: h => h(App),
}).$mount('#app')

