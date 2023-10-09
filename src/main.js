import Vue from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'


Vue.config.productionTip = false

Vue.use(Maska) // plugin do vue
Vue.prototype.$moment = moment // add propriedade global 
Vue.prototype.$moment.locale('pt-br') 
new Vue({
  render: h => h(App),
}).$mount('#app')

