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
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
