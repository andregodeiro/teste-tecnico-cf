import axios from 'axios';

const fetchData = async () => {
  let dados = []
  const res = await axios.get("http://localhost:3030/orders/1")
  .then(response => (dados = response.data)).then(console.log('aqui'))
  return res
}

export default fetchData;
