import Landing from './pages/Landing'
import Main from './pages/MainPage'

function App() {
  const code: string | null = new URLSearchParams(window.location.search).get(
    'code'
  )
  if (localStorage.getItem('accessToken')) {
    localStorage.clear()
  }

  return !code ? <Landing /> : <Main code={code} />
}

export default App
