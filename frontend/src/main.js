
import Vue from 'vue'
import { createApp } from 'vuex'
import App from './App'
import store from './store'

createApp(App).use(store).mount('#app')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
