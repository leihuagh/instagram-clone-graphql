export default {
  Query: {
    allUsers: (parent, args, { models }) => {
      const users = models.User.find()
      return users
    },
    getUser: (parent, args, { models }) => models.User.findOne(args),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
  },
}
