const db = require('./models')
const data = require('./listingData.json')

db.Listing.create(data.listings, (err, seededListings) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(seededListings.length, 'listings created successfully');
    console.log('done!');
    process.exit();
})