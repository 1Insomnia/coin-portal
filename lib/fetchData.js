import axios from 'axios'

const BASE_URL = `https://api.nomics.com/v1`

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const fetchData = async url => {
  try {
    const { data } = await instance.get(url)
    return {
      data: data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error.message
    }
  }
}

const fetchCurrencies = async (interval = '1d') => {
  const { data, error } = await fetchData(
    `/currencies/ticker?key=${process.env.API_KEY}&per-page=100&interval=${interval}`
  )
  return {
    data: data,
    error: error
  }
}

const fetchExchangeRates = async () => {
  const { data, error } = await fetchData(
    `/exchange-rates?key=${process.env.API_KEY}`
  )
  return {
    data: data,
    error: error
  }
}

export { fetchCurrencies, fetchExchangeRates }
