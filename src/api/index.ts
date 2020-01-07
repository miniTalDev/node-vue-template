import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = process.env.NODE_ENV !== 'production'
  ? axios
  : axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
  })

export default api
