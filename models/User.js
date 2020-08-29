const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
    type: String,
    unique: true
    }, 
    password: {
        type: String
    }, 
    preferences: [
        {
          type: Schema.Types.ObjectId,
          ref: "Preferences"
        }
      ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
