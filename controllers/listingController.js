const router = require('express').Router();
const db = require('../models');
//link === server/listings


//index route
router.get('/', (req, res) => {
    db.Listing.find({}, (err, foundListing) => {
        if (err) return console.log(err);
        res.json(foundListing);
    });
});

//show route
router.get('/:id', (req,res) => {
    db.Listing.findById(req.params.id, (err,foundListing) => {
        if (err) return console.log(err);
        res.json(foundListing);
    });
});

//create route
router.post('/', (req, res) => {
    db.Listing.create(req.body, (err, createdListing) => {
        if (err) return console.log(err);
        console.log(req.body) //check
        res.json(createdListing);
    });
});

///update and delete route coming soon

module.exports = router;