import { useState, useEffect } from "react"
import axios from "axios"

function useAuth(code: string) {
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [expiresIn, setExpiresIn] = useState(300)

  useEffect(() => {
    axios.post('http://localhost:3000/login', {
        code: code
    })
    .then(resp => {
      setAccessToken(resp.data.accessToken)
      setExpiresIn(resp.data.expiresIn)
      setRefreshToken(resp.data.refreshToken)
      window.history.pushState({}, null, '/')
    })  
    .catch(error => {
      console.log(error)
    })
  }, [code])

  return { accessToken, refreshToken, expiresIn }
}


export default useAuth