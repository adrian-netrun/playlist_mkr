interface UserProps {
  username: string, 
  spotifyProfileUrl: string
}

const User: React.FC<UserProps> = ({username, spotifyProfileUrl}) => {
  return (
    <div>
      {username}
      {spotifyProfileUrl}
    </div>

  )
}

export default User