import mongoose from 'mongoose'
import config from './../config'

const dbConnect = () => {
  mongoose.Promise = global.Promise
  mongoose.connect(config.database.uri, {}, (err) => {
    if (err) {
      console.log('Database is not connected...')
    } else {
      console.log('Database is connected...')
    }
  })
}

export default dbConnect
