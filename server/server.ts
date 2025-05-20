import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const app: Express = express ()
const port: number = 3500 // add dotenv


app.use(cors())
app.use(express.static('../dist'))

app.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', {root: '../dist'})
})

app.listen(port, () => {
  console.log(`server started port: ${port}`)
})