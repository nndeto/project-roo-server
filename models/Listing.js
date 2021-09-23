const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    street_address: String,
    city: String,
    state: String,
    pictures: [String],
    lister: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }    
})

//Model
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
