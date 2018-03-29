import express from 'express'
import config from './config'
import connectGraphQL from './graphql'

const server = express()
connectGraphQL(server)

server.get('*', (req, res) => {
  res.send('Server Home')
})

server.listen(config.server.port, () => {
  console.log(`Server is running on http://localhost:${config.server.port}`)
})
