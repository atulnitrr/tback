const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    index: true,
    minlength: 1,
    maxlength: 50,
  },
  last_name: {
    type: String,
    index: true,
    minlength: 1,
    maxlength: 50,
  },
  email_id: {
    type: String,
    index: {
      unique: true,
    },
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 150,
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
