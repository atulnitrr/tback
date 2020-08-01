const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  tweet: {
    type: String,
  },
  user_id: {
    type: String,
    index: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model("Tweets", tweetSchema);
module.exports = Tweet;
