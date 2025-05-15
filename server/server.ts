import express, {Express, Request, Response} from 'express'

const app: Express = express ()
const port: number = 3500 // add dotenv

app.use(express.static('../client/dist/'))


app.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', {root: '../client/dist'})
})

app.listen(port, () => {
  console.log(`server started port: ${port}`)
})