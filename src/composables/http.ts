import axios from 'axios'
import { apiUrl } from '~/config/env'

export const http = axios.create({
  baseURL: apiUrl,
})

http.interceptors.request.use((config) => {
  console.log(config.baseURL)
  config.baseURL = config?.baseURL?.replace('http://', 'https://')
  config.url = `${config.baseURL}/${config.url}`

  return config
})
