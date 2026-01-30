import { defineStore } from 'pinia'
import { useGet } from '~/composables/api'
import { spotifyHttp } from '~/composables/spotifyHttp'
import type { CurrentTrack } from '~/models/Spotify'

interface State {
  currentTrack: CurrentTrack
}

const useSpotifyStore = defineStore('Spotify', {
  state: (): State => ({
    currentTrack: {} as CurrentTrack
  }),
  actions: {
    fetchCurrentTrack() {
      return useGet('me/player/currently-playing', this.afterFetchCurrentTrack(), false, spotifyHttp)
    },
    afterFetchCurrentTrack() {
      return (response: CurrentTrack) => {
        this.$state.currentTrack = response

        return response
      }
    }
  },
  getters: {
    isPlaying: (state) => state.currentTrack?.is_playing || false,
    artistName: (state) =>
      state.currentTrack?.item?.artists?.map((artist) => artist.name).join(', ') || '',
    trackName: (state) => state.currentTrack?.item?.name || '',
    albumImage: (state) => state.currentTrack?.item?.album?.images?.[0]?.url || '',
    spotifyUrl: (state) => state.currentTrack?.item?.external_urls?.spotify || ''
  }
})

export { useSpotifyStore }
