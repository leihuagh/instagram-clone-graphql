import express from 'express'
import config from './config'
import setMiddleware from './middleware'
import dbConnect from './middleware/dbconnect'
import connectGraphQL from './graphql'

const server = express()
setMiddleware(server)
dbConnect()
connectGraphQL(server)

server.get('*', (req, res) => {
  res.send('Server Home')
})

server.listen(config.server.port, () => {
  console.log(`GraphQL server is running on http://localhost:${config.server.port}`)
})
