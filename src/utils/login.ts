
function loginUser () {
  const clientID = "d7995d5701284c2299fce12bc4d3f20f"
  const redirectURI = 'http://localhost:5173'
  const scopes = 'user-read-currently-playing'

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
  window.location.href = spotifyAuthUrl
}

export default loginUser