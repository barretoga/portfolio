import { defineStore } from 'pinia'
import { getNowPlaying, type SpotifyNowPlaying } from '~/services/spotifyAuth'

interface State {
  currentTrack: SpotifyNowPlaying | null
  isLoading: boolean
  error: string | null
}

const useSpotifyStore = defineStore('Spotify', {
  state: (): State => ({
    currentTrack: null,
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchCurrentTrack() {
      this.isLoading = true
      this.error = null
      
      try {
        const response = await getNowPlaying()
        this.currentTrack = response
        return response
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch current track'
        console.error('Error fetching current track:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    }
  },
  getters: {
    isPlaying: (state) => state.currentTrack?.isPlaying || false,
    artistName: (state) => state.currentTrack?.artist || '',
    trackName: (state) => state.currentTrack?.title || '',
    albumImage: (state) => state.currentTrack?.albumImageUrl || '',
    spotifyUrl: (state) => state.currentTrack?.songUrl || '',
    albumName: (state) => state.currentTrack?.album || ''
  }
})

export { useSpotifyStore }
