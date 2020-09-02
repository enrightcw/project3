const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
    userName: {
        type: String
    },
});

const Friends = mongoose.model("Friends", FriendsSchema);

module.exports = Friends;