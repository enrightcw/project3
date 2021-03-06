process.env.NODE_ENV !== "production" && require('dotenv').config();
const express = require("express");
const path = require("path");
const tripAdvisorRoutes = require('./routes/api/tripAdvisor');

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const mongoose = require("mongoose");
const { userInfo } = require("os");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/project3',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

db.User.create({ name: "" })
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
});

db.Preferences.create({ name: "" })
  .then(dbPreferences => {
    console.log(dbPreferences);
  })
  .catch(({ message }) => {
    console.log(message);
});

app.get("/user", (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/preferences", (req, res) => {
  db.Preferences.find({})
    .then(dbPreferences => {
      res.json(dbPreferences);
    })
    .catch(err => {
      res.json(err);
    });
});


app.post("/submit", ({ body }, res) => {
  db.Preferences.create(body)
  //userId needs to be called on the frontend
    .then(({ _id }) => db.User.findOneAndUpdate({_id: body.userId}, { $push: {preferences: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});


app.use(tripAdvisorRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


