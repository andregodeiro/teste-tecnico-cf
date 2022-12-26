import axios from 'axios'

const fetchData = async (id) => {
  const res = await axios({
    method: 'get',
    url: `http://localhost:3030/orders/${id}`
  })
  return res.data.payload
}

export default fetchData
