const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email_id: {
    type: String,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
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

const User = mongoose.model("Users", userSchema);

module.exports = User;
