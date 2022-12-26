import axios from 'axios'
import fetchData from '../api/fetchData';


export default {
    async fetchOrders({commit}) {
      try {
    const data = await axios.get("http://localhost:3030/orders/1");
    commit('setOrders', data.data.payload)
    console.log(data)
  } catch (error) {
    alert(error);
    console.log(error);
  }
  } 
}