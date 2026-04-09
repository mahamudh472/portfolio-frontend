import axios from 'axios'

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL
const normalizedBaseUrl = configuredBaseUrl
  ? configuredBaseUrl.replace(/\/$/, '')
  : '/api'

const apiClient = axios.create({
  baseURL: normalizedBaseUrl,
  timeout: 5000,
})

export default apiClient
