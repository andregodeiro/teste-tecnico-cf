import fetchData from '../api/fetchData.js'

export default {
  async getOrders ({commit}) {
    const data = await fetchData(1)

    commit('getorders', data)
  }
}
