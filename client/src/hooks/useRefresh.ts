import axios from "axios"
import { useEffect, useState } from "react"

function useRefresh(refreshToken: string, expiresIn: number) {
  const [tokens, setTokens] = useState()

  useEffect(() => {
    if (!refreshToken || !expiresIn) return 
    const interval = setInterval(() => {
        axios.post('http://localhost:3000/refresh', {
          refreshToken: refreshToken
        })
        .then(resp => {
          setTokens(resp.data)
        })  
        .catch(error => {
          console.log(error)
        })    
      }, (expiresIn - 60) * 1000)
  
      return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return tokens
}

export default useRefresh
