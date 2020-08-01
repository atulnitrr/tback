const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/twitDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

(() => {
  const db = mongoose.connection;
  db.on("error", (dd) => {
    console.log(dd);
  });

  db.once("open", (dd) => {
    console.log("we are connected");
    const kittenSchema = new mongoose.Schema({ name: String });
    const Kitten = mongoose.model("Kitten", kittenSchema);
    // const silence = new Kitten({ name: "Kitten dat" });
    // console.log(silence.name);
    // silence.save((error, data) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(data);
    //   }
    // });

    // Kitten.find((error, kittens) => {
    //   console.log(kittens);
    // });
  });
})();

const expressApp = express();

expressApp.use(helmet());
expressApp.use(bodyparser.json());
expressApp.use(bodyparser.urlencoded({ extended: true }));
expressApp.use(express.static("public"));

expressApp.listen("3033", () => {
  console.log("app is up at 3000");
});

module.exports = {
  expressApp,
};
