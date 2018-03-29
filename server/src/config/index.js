const config = {
  server: {
    port: process.env.PORT || 8081,
  },
  graphql: {
    endpoint: 'graphql',
    viewer: 'graphiql',
  },
  database: {
    uri: 'mongodb://localhost:27017/instagramcolon',
  },
}

export default config
