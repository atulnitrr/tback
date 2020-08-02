const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  user_id: {
    type: String,
    index: true,
  },
  follower_id: {
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

const Follower = mongoose.model("Followers", followerSchema);

module.exports = Follower;
