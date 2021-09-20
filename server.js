const express = require('express'); //calling in express our middleware middleman
const cors = require('cors'); //the calling card between our front end and back end
const rowdy = require('rowdy-logger') //helps us visually see our routes


//DB and Models



//Configuration
const port = 4000;
const app = express();
const rowdyResults = rowdy.begin(app)
app.use(cors());

// allows for req.body
app.use(express.json()); 

//Controllers


//checking turned on port
app.listen(port, () => {
    console.log(`Finding you a roommate at ${port}.`)
    rowdyResults.print();
})