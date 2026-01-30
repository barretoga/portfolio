import axios from 'axios'
import { getAccessToken } from '~/services/spotifyAuth'

export const spotifyHttp = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

spotifyHttp.interceptors.request.use(
  async (config) => {
    try {
      const token = await getAccessToken()
      config.headers.Authorization = `Bearer ${token}`
      return config
    } catch (error) {
      throw error
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
