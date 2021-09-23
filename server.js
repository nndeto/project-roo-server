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


//user routes
//signup post route
app.post('/signup', (req, res) => {
    console.log(req.body);
    db.User.create(req.body, (err, createdUser) => {
      if (err) console.log(err);
      console.log(createdUser);
      req.session.currentUser = createdUser;
        res.json({
            message: "You're signed up!"
        });
    });
  })

  
//login route to check if user exists
app.post("/login", (req, res) => {
    console.log(req.body);
    db.User.findOne({ username: req.body.username }, (err, foundUser) => {
      if (err) return console.log(err);
      if (!foundUser) {
        return res.json({
            message: "Username  not found"
        });
      }
      if (req.body.password !== foundUser.password) {
        return res.json({
            message: "Wrong password"
        });
      }
      req.session.currentUser = foundUser;
      console.log(req.session);
      res.json({
          message: "You are logged in"
      });
    });
  });

//logout route to destroy session
app.get('/logout', (req, res) => {
    req.session.destroy();
    console.log("you're logged out")
  })
  




//checking turned on port
app.listen(port, () => {
    console.log(`Finding you a roommate at ${port}.`)
    rowdyResults.print();
})