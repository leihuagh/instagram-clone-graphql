import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import config from './../config'
import schema from './schema'
import models from './../models'

const connectGraphQL = (server) => {
  server.use(
    `/${config.graphql.endpoint}`,
    bodyParser.json(),
    graphqlExpress({
      schema,
      context: {
        models,
      },
    }),
  )
  server.get(
    `/${config.graphql.viewer}`,
    graphiqlExpress({ endpointURL: `/${config.graphql.endpoint}` }),
  )
}

export default connectGraphQL
