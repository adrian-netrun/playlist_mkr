import spotifyLogo from '../assets/spotify_logo.png'
import './Login.css'

interface ButtonProps {
  authUrl: string
}

const LoginButton: React.FC<ButtonProps> = ({authUrl}) => {
  return (
    <section className='login__container' >
        <a className='login__container__btn__grp' href={authUrl}>
            <img src={spotifyLogo} />
            <p>Sign in with Spotify</p>
        </a>
    </section>
  )
}

export default LoginButton
