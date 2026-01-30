import axios from 'axios'

// Interface para a resposta da API de "now playing"
export interface SpotifyNowPlaying {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
  timestamp?: number
  progress_ms?: number
  duration_ms?: number
}

// Interface para a resposta da API de "recently played"
export interface SpotifyRecentlyPlayed {
  tracks: Array<{
    title: string
    artist: string
    album: string
    albumImageUrl: string
    songUrl: string
    playedAt: string
  }>
  total: number
}

/**
 * Busca a música que está tocando atualmente no Spotify
 * Usa a Vercel Function para manter as credenciais seguras no backend
 */
export async function getNowPlaying(): Promise<SpotifyNowPlaying> {
  try {
    const response = await axios.get<SpotifyNowPlaying>('/api/spotify/now-playing')
    return response.data
  } catch (error) {
    console.error('Error fetching now playing:', error)
    throw error
  }
}

/**
 * Busca as músicas recentemente tocadas no Spotify
 * @param limit - Número de músicas a retornar (padrão: 10)
 */
export async function getRecentlyPlayed(limit = 10): Promise<SpotifyRecentlyPlayed> {
  try {
    const response = await axios.get<SpotifyRecentlyPlayed>(
      `/api/spotify/recently-played?limit=${limit}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching recently played:', error)
    throw error
  }
}
