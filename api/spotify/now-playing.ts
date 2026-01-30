import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Permitir apenas GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
  const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return res.status(500).json({ error: 'Missing Spotify credentials' })
  }

  try {
    // 1. Obter access token usando refresh token
    const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN
      })
    })

    if (!tokenResponse.ok) {
      const error = await tokenResponse.json()
      console.error('Token error:', error)
      return res.status(tokenResponse.status).json({ error: 'Failed to get access token' })
    }

    const { access_token } = await tokenResponse.json()

    // 2. Buscar música atual
    const nowPlayingResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    )

    // Se não estiver tocando nada, retorna 204
    if (nowPlayingResponse.status === 204) {
      return res.status(200).json({ isPlaying: false })
    }

    if (!nowPlayingResponse.ok) {
      const error = await nowPlayingResponse.json()
      console.error('Now playing error:', error)
      return res.status(nowPlayingResponse.status).json({ error: 'Failed to get now playing' })
    }

    const data = await nowPlayingResponse.json()

    // 3. Retornar dados formatados
    return res.status(200).json({
      isPlaying: data.is_playing,
      title: data.item?.name,
      artist: data.item?.artists?.map((artist: any) => artist.name).join(', '),
      album: data.item?.album?.name,
      albumImageUrl: data.item?.album?.images?.[0]?.url,
      songUrl: data.item?.external_urls?.spotify,
      timestamp: data.timestamp,
      progress_ms: data.progress_ms,
      duration_ms: data.item?.duration_ms
    })

  } catch (error) {
    console.error('Unexpected error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
