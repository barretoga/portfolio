export interface CurrentTrack {
  context: string
  timestamp: number
  progress_ms: number
  is_playing: boolean
  item: {
    album: {
      album_type: string
      total_tracks: number
      available_markets: Array<string>
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: Array<{
        url: string
        height: number
        width: number
      }>
      name: string
      release_date: string
      release_date_precision: string
      type: string
      uri: string
      artists: Array<{
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: string
        uri: string
      }>
    }
    artists: Array<{
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      type: string
      uri: string
    }>
    available_markets: Array<string>
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
      isrc: string
    }
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  currently_playing_type: string
  actions: {
    disallows: {
      resuming: boolean
    }
  }
}
