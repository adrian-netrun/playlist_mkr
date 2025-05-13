function loginUser () {
  const clientID = "d7995d5701284c2299fce12bc4d3f20f"
  const redirectURI = 'http://127.0.0.1:5173'
  const response_type = "code"
  const scopes = 'user-read-currently-playing'

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=${response_type}&redirect_uri=${redirectURI}`;
  window.location.href = spotifyAuthUrl

  const queryString = window.location.search;
  console.log(queryString)
}

export default loginUser