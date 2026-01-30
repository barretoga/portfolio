import axios from 'axios'
import { spotifyClientId, spotifyClientSecret, spotifyRefreshToken } from '~/config/env'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

export async function getAccessToken(): Promise<string> {
  const refreshToken = spotifyRefreshToken;

  const basicAuth = btoa(`${spotifyClientId}:${spotifyClientSecret}`);

  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }),
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    return response.data.access_token
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Data:', error.response?.data)
    }
    throw error
  }
}
