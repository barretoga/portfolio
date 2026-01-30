import { defineStore } from 'pinia'
import { getNowPlaying, getRecentlyPlayed, type SpotifyNowPlaying } from '~/services/spotifyAuth'

interface State {
  currentTrack: SpotifyNowPlaying | null
  lastPlayedTrack: SpotifyNowPlaying | null
  isLoading: boolean
  error: string | null
}

const useSpotifyStore = defineStore('Spotify', {
  state: (): State => ({
    currentTrack: null,
    lastPlayedTrack: null,
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
        
        if (!response.isPlaying) {
          await this.fetchLastPlayed()
        }
        
        return response
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch current track'
        console.error('Error fetching current track:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    },
    
    async fetchLastPlayed() {
      try {
        const response = await getRecentlyPlayed(1)
        
        if (response.tracks && response.tracks.length > 0) {
          const lastTrack = response.tracks[0]
          this.lastPlayedTrack = {
            isPlaying: false,
            title: lastTrack.title,
            artist: lastTrack.artist,
            album: lastTrack.album,
            albumImageUrl: lastTrack.albumImageUrl,
            songUrl: lastTrack.songUrl
          }
        }
      } catch (error) {
        console.error('Error fetching last played:', error)
      }
    }
  },
  getters: {
    isPlaying: (state) => state.currentTrack?.isPlaying || false,
    
    artistName: (state) => {
      if (state.currentTrack?.isPlaying) {
        return state.currentTrack.artist || ''
      }
      return state.lastPlayedTrack?.artist || ''
    },
    
    trackName: (state) => {
      if (state.currentTrack?.isPlaying) {
        return state.currentTrack.title || ''
      }
      return state.lastPlayedTrack?.title || ''
    },
    
    albumImage: (state) => {
      if (state.currentTrack?.isPlaying) {
        return state.currentTrack.albumImageUrl || ''
      }
      return state.lastPlayedTrack?.albumImageUrl || ''
    },
    
    spotifyUrl: (state) => {
      if (state.currentTrack?.isPlaying) {
        return state.currentTrack.songUrl || ''
      }
      return state.lastPlayedTrack?.songUrl || ''
    },
    
    albumName: (state) => {
      if (state.currentTrack?.isPlaying) {
        return state.currentTrack.album || ''
      }
      return state.lastPlayedTrack?.album || ''
    },
    
    hasTrackData: (state) => {
      return !!(state.currentTrack?.isPlaying || state.lastPlayedTrack)
    }
  }
})

export { useSpotifyStore }
