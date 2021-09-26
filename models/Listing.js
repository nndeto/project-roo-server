const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    lister: String,
    lister_pic: { type: String, default: 'https://i.imgur.com/WLVUvqFm.jpg'},   
    title: String,
    description: String,
    price: Number,
    street_address: String,
    city: String,
    state: String,
    pictures: [String]
})

//Model
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
