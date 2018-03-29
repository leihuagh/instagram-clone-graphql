import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import config from './../config'
import schema from './schema'

const connectGraphQL = (server) => {
  server.use(
    `/${config.graphql.endpoint}`,
    bodyParser.json(),
    graphqlExpress({
      schema,
    }),
  )
  server.get('/', graphiqlExpress({ endpointURL: `/${config.graphql.endpoint}` }))
}

export default connectGraphQL
