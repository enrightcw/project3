const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grubbledb", { useNewUrlParser: true });

const users= [
    {
        username: "Tim",
        password: "timlovescoffee"
    },
    {
        username: "Chris",
        password: "asdfd"
    },
    {
        username: "Tyler",
        password: "tlkjlkj"
    }
]

db.User.insertMany(users)
.then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });