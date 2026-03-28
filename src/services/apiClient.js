import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

export const buildMockAdapter = (payload, delay = 900) => {
  return async (config) => {
    await new Promise((resolve) => setTimeout(resolve, delay))

    return {
      data: payload,
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
      request: {},
    }
  }
}

export default apiClient
