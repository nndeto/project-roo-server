const db = require('./models');

db.Listing.deleteMany({}, (err) =>{
    if (err) return console.log(err)
    console.log("deleted all listings")
})