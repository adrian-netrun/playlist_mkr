import axios from 'axios'
import { useEffect } from 'react'

const CURRENTLY_PLAYING_URL =
  'https://api.spotify.com/v1/me/player/currently-playing'

export default function useFetchPlaybackData() {
  useEffect(() => {
    axios
      .get(CURRENTLY_PLAYING_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return
}
