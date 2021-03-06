const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    age: String,
    about: String,
    profile_pic: String,
    roommate_preferences: String,
    favorite_listings: [String], 
    posted_listing: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
  
    }]
})

//Model
const User = mongoose.model('User', userSchema)

module.exports = User
