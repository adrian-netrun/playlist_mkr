import useAuth from "../hooks/useAuthHook"
import useRefresh from "../hooks/useRefresh"
import Header from "../components/Header"
import useFetchProfileData from "../hooks/useFetchProfileData"
import User from "../components/User"
import useFetchPlaybackData from "../hooks/useFetchPlaybackData"

interface ICode {
  code: string | any
}

interface IProfileData {
  username: string, 
  profileUrl: string, 
  error: {
    bool: boolean, 
    message: {}
  }
}

function Main({ code }: ICode) {

  const {accessToken, refreshToken, expiresIn} = useAuth(code)
  const {username, profileUrl, error}: IProfileData = useFetchProfileData()
  localStorage.setItem('accessToken', accessToken)
  useRefresh(refreshToken, expiresIn)

  useFetchPlaybackData()

  return (
    <div>
      <Header />
      <User username={username} spotifyProfileUrl={profileUrl} />
    </div>
  )
}

export default Main