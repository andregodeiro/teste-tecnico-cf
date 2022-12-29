import axios from 'axios'



export default {
    async fetchOrders({commit}) {
      try {
    const data = await axios.get("http://localhost:3030/orders/1");
    commit('setOrders', data.data.payload)
  } catch (error) {
    alert(error);
    console.log(error);
  }
  } 
}