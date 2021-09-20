const mongoose = require('mongoose')

//roo is the name of our db
const connectionString =  process.env.MONGODB_URI || 'mongodb://localhost:27017/roo';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

  module.exports = {
      Listing: require('./Listing.js')
  }