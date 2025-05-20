import './Login.css'
import spotifyLogo from '../assets/spotify_logo.png'

const CLIENT_ID: string = 'd7995d5701284c2299fce12bc4d3f20f'
const REDIRECT_URI: string = 'http://127.0.0.1:5173'
const AUTH_ENDPOINT: string = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE: string = 'code'

function LoginButton() {
  return (
    <section className='login__container' >
        <a className='login__container__btn__grp' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <img src={spotifyLogo} />
            <p>Sign in with Spotify</p>
        </a>
    </section>
  )
}

export default LoginButton
