import spotifyLogo from '../assets/spotify_logo.png'
import '../styles/Login.css'

const authUrl: string = `https://accounts.spotify.com/authorize?client_id=${
  import.meta.env.VITE_CLIENT_ID
}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`
const scope = ['user-read-playback-state', 'user-read-currently-playing']

const LoginButton = () => {
  const LOGIN_URL = authUrl + `&scope=${encodeURIComponent(scope.join(' '))}`

  return (
    <section className="login__container">
      <a className="login__container__btn__grp" href={LOGIN_URL}>
        <img src={spotifyLogo} />
        <p>Sign in with Spotify</p>
      </a>
    </section>
  )
}

export default LoginButton
