const env = {
  apiUrl: import.meta.env.VITE_APP_URL,
  apiTitle: import.meta.env.VITE_API_TITLE,
  spotifyClientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  spotifyClientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  spotifyRefreshToken: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN
}

export const {
  apiUrl,
  apiTitle,
  spotifyClientId,
  spotifyClientSecret,
  spotifyRefreshToken
} = env
