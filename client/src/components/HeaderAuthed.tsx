import logo from '../assets/LightLogo.png'
import '../styles/HeaderAuthd.css'
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
    <nav className="auth_navbar">
      <div className="auth_navbar__left">
        <a href="#">
          <img src={logo} />
        </a>
        <h1 className="auth_navbar__name">Playlistify</h1>
      </div>
      <div className="auth_navbar__right">
        <Avatar />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default HeaderAuthed
