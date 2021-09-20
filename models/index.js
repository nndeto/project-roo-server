const mongoose = require('mongoose')

//roo is the name of our db
const connectionString =  process.env.MONGODB_URI || 'mongodb://localhost:27017/roo';

// Fire off the connection to Mongo DB
const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connects to MongoDB
mongoose.connect(connectionString, configOptions)
  .then(() => console.log('You\'ve got data!'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

  

  module.exports = {
      Listing: require('./Listing.js')
  }