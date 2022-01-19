import axios from 'axios'

const BASE_URL = `https://api.nomics.com/v1`

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const fetchCurrencies = async (interval = '1d') => {
  try {
    const { data } = await instance.get(
      `/currencies/ticker?key=${process.env.API_KEY}&per-page=100&interval=${interval}`
    )
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

export { fetchCurrencies }
