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

    // 2. Buscar músicas recentes (limite de 10)
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
    
    const recentlyPlayedResponse = await fetch(
      `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    )

    if (!recentlyPlayedResponse.ok) {
      const error = await recentlyPlayedResponse.json()
      console.error('Recently played error:', error)
      return res.status(recentlyPlayedResponse.status).json({ error: 'Failed to get recently played' })
    }

    const data = await recentlyPlayedResponse.json()

    // 3. Retornar dados formatados
    const tracks = data.items?.map((item: any) => ({
      title: item.track?.name,
      artist: item.track?.artists?.map((artist: any) => artist.name).join(', '),
      album: item.track?.album?.name,
      albumImageUrl: item.track?.album?.images?.[0]?.url,
      songUrl: item.track?.external_urls?.spotify,
      playedAt: item.played_at
    }))

    return res.status(200).json({
      tracks,
      total: tracks?.length || 0
    })

  } catch (error) {
    console.error('Unexpected error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
