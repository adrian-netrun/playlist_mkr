import express, {Express} from 'express'

const app: Express = express ()
const port: number = 5000 // add dotenv

app.listen(port, () => {
  console.log(`server started port: ${port}`)
})