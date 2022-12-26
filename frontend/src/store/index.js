import {createStore} from 'vuex'
import orders from './orders.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default createStore({
  modules: {
    orders
  },
  actions,
  mutations
})
