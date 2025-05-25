import Header from '../components/Header'
import LoginButton from '../components/LoginButton'
import LandingFooter from '../components/LandingFooter'
import heroImg from '../assets/background__land__final.png'
import './Landing.css'

function Landing() {

    // *************************************** //
    //      DO NOT WRAP THIS LINE UNNESCCARY   //
    //         %20 ADDED TO Q STRING           //
    // *************************************** //

    const authUrl: string = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`
    const scope = ['user-read-playback-state, user-modify-playback-state']
    const LOGIN_URL = authUrl + `&scope=${encodeURIComponent(scope.join(' '))}`
    
  return (
    <>
      <Header />
        <section className='hero__'>
          <img src={heroImg} />
        </section>
        <div className='content__'>
          <div className='content__mission'>
            <h3 className="content__mission__heading">What is this?</h3>
            <p>
              This is a simple project that uses the Spotify Developer API to help you create playlists on Spotify using
              your account. It is built using HTML, CSS, JS with React. As mentioned aboove it uses the Spotify Developer API
              on the back end which allows developers to integrate Spotify into appllications - it can be found  
              <a href="https://developer.spotify.com/">here</a>
            </p>  
          </div>
        </div>
          <div className='content__call'>
            <h3 className="content__call__heading">Give it a try!</h3>
            <p>
              Please login below and enjoy!,
              should you wish to view the rest of my portfolio click see bottom of page
            </p>
          </div>
      <LoginButton authUrl={authUrl}/>
      <LandingFooter />
    </>
  )
}

export default Landing