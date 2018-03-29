import bodyParser from 'body-parser'
import cors from 'cors'

const setMiddleware = (server) => {
  server.use(cors())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
}

export default setMiddleware
