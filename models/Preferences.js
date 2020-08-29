const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreferencesSchema = new Schema({
    likes: {
        type: String
    },
    dislikes: {
        type: String
    }
});

const Preferences = mongoose.model("Preferences", PreferencesSchema);

module.exports = Preferences;