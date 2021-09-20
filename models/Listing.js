const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    street_address: String,
    city: String,
    pictures: [String],
    //lister --> will reference user model    
})

//Model
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
