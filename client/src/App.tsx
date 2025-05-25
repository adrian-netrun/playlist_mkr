import { useEffect, useState, type SetStateAction } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import getToken from './utils/fetchToken'
import Landing from './pages/Landing'
import Main from './pages/MainPage'
import Error from './pages/Error'
import NoAuth from './pages/NoAuth'

interface ITokenType {
  access_token: string, 
  refresh_token: string
}


function App() { 

  const navigate = useNavigate()
  
  const [code, setCode]: [string, React.Dispatch<SetStateAction<string | any>>] = useState('') 
  const [token, setToken]: [ITokenType, React.Dispatch<SetStateAction<ITokenType>>] = useState({access_token: '', refresh_token: ''})
  const [error, setError]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState(false)

  useEffect(() => {
    const tokenUrl = 'https://accounts.spotify.com/api/token'
    setCode(window.location.href.split('=').pop())

    try {
      if (!code) {
        return
      }
      
      const response = getToken(code, tokenUrl)
      response.then(res => {
        setToken({...token, 
          access_token: res.access_token,
          refresh_token: res.refresh_token
        })
        if (token) {
          navigate('/main')
        } 
      })
    } catch (issue) {
      setError(true)
    }
  }, [code])  

  console.log(token)

  return (
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/main' element={token ? <Main /> : <Navigate to='/no-auth' replace />} />
        <Route path='/no-auth' element={<NoAuth />} />
        <Route path='/error' element={!error ? <Navigate to='/main' replace/> : <Error />} />
      </Routes>
  )
}

export default App
 