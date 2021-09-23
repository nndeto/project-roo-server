const express = require('express'); //calling in express our middleware middleman
const cors = require('cors'); //the calling card between our front end and back end
const rowdy = require('rowdy-logger') //helps us visually see our routes
const session = require('express-session');

//DB and Models
const listingController = require('./controllers/listingController.js')
const db = require('./models/index.js');

//Configuration
const port = 4000;
const app = express();
const rowdyResults = rowdy.begin(app)
app.use(cors());

// allows for req.body
app.use(express.json()); 
app.use(session({ secret: process.env.SESSION_SECRET }));

//Controllers
app.use('/listings', listingController);

//checking turned on port
app.listen(port, () => {
    console.log(`Finding you a roommate at ${port}.`)
    rowdyResults.print();
})