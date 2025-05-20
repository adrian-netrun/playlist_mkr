import logo from '../assets/LightLogo.png'
import './Header.css'

// The header will also contain the Navigation elements
function Header() {
  return (
    <div className='container__'>
      <div className='container__logo'>
        <a href="#"><img src={logo}/></a>
      </div>
      <div className='container__heading'>
        <h1 className='nabar__name'>Playlistify</h1>
      </div>
    </div>
  )
}

export default Header