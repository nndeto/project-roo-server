const router = require('express').Router();
const db = require('../models');
//link === server/listings


//index route --> returns all locations so my location cards can be sorted
router.get('/', (req, res) => {
    db.Listing.find({}, (err, foundListing) => {
        if (err) return console.log(err);
        res.json(foundListing);
    });
});


//secondary index route
//i want this to find me citys that match the request cityName
router.get('/:cityName', (req, res) => {
    // console.log(req.params.cityName)
    db.Listing.find({city:req.params.cityName}, (err, foundCities) => {
        // console.log(foundCities)
        if (err) return console.log(err);
        res.json(foundCities);
    })
})

// show route for single listing
router.get('/city/:listingId', (req,res) => {
    db.Listing.findById(req.params.listingId, (err,foundListing) => {
        if (err) return console.log(err);
        res.json(foundListing);
    });
});

//create route
router.post('/', (req, res) => {
    db.Listing.create(req.body, (err, createdListing) => {
        if (err) return console.log(err);
        // console.log(req.body) //check
        res.json(createdListing);
    });
});

///update and delete route coming soon


//delete route
router.delete('/:id', (req, res) => {
    db.Listing.findByIdAndDelete(req.params.id, (err, deletedListing) => {
        if (err) return console.log(err);
        res.json("We deleted this." + deletedListing)
    })
})


module.exports = router;