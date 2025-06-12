import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import SpotifyWebApi from 'spotify-web-api-node'

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())


app.post('/login', (req: Request, res: Response) => {
  const code: string = req.body.code
  const spotifyAPI = new SpotifyWebApi({
    clientId: 'd7995d5701284c2299fce12bc4d3f20f',
    clientSecret: 'c2177285ad16481bb2b9601c8f514862',
    redirectUri: 'http://127.0.0.1:5173'
  })

  spotifyAPI.authorizationCodeGrant(code)
  .then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
  .catch(error => {
    res.status(400).json({
      message: 'Login error', 
      code: 400
    })
  })
})

app.post('/refresh', (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken
  const spotifyAPI = new SpotifyWebApi({
    clientId: 'd7995d5701284c2299fce12bc4d3f20f',
    clientSecret: 'c2177285ad16481bb2b9601c8f514862',
    redirectUri: 'http://127.0.0.1:5173',
    refreshToken: refreshToken
  })

  spotifyAPI.refreshAccessToken()
  .then(data => {
    res.json(data)
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Token refresh error', 
      code: 400
    })
  })
})

app.listen(port, () => {
  console.log(`Server running on: ${port}`)
})
