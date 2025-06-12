import { useState, useEffect, } from "react"
import axios from "axios"

const FETCH_USER_URL = 'https://api.spotify.com/v1/me'

function useFetchProfileData() {
  const [username, setUsername] = useState('')
  const [profileUrl, setProfileUrl] = useState('')
  const [error, setError] = useState({bool: false, message: ''})

  useEffect(() => {
    axios.get(FETCH_USER_URL, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(response => {
      setUsername(response.data.display_name)
      setProfileUrl(response.data.external_urls.spotify)
    })
    .catch(error => {
      setError({bool: true, message: error})
    })
  })

  return {username, profileUrl, error}
}

export default useFetchProfileData