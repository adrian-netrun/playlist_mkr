import '../styles/Login.css'
import loginUser from '../utils/login'

function Login() {
  return (
    <section className='login__container' >
        <button className='login__container__btn__grp' onClick={loginUser}><img src="src/assets/spotify_logo.png" /><p>Sign in with Spotify</p></button>
    </section>
  )
}

export default Login