import './Login.css'
import spotifyLogo from '../assets/spotify_logo.png'

function LoginButton() {
  return (
    <section className='login__container' >
        <button className='login__container__btn__grp'><img src={spotifyLogo} /><p>Sign in with Spotify</p></button>
    </section>
  )
}

export default LoginButton
