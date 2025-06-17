import logo from '../assets/LightLogo.png'
import '../styles/avatar.css'

const handleLogout = () => {
  localStorage.clear()
  window.location.reload()
  return
}

const Avatar = () => {
  return (
    <div className="avatar">
      <span>{'A'}</span>
    </div>
  )
}

function HeaderAuthed() {
  return (
    <div className="container__">
      <div className="container__logo">
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <div className="container__heading">
        <h1 className="nabar__name">Playlistify</h1>
      </div>
      <Avatar />
      <div className="logout__button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default HeaderAuthed
