const expressApp = require("../servers").expressApp;
const Tweet = require("../model/Tweets");
const Follower = require("../model/Followers");

expressApp.get("/tweet/:tweet_id", (req, res) => {
  // TODO --> Validation
  const tweet_id = req.params.tweet_id;
  Tweet.findById(tweet_id, (err, dbResult) => {
    if (err) {
      console.log(JSON.stringify(err, null, 2));
      return res.status(500).send({
        status: "FAILURE",
        data: { msg: "Could not find " },
      });
    } else {
      return res.send({ status: "SUCESS", data: dbResult });
    }
  });
});

expressApp.get("/tweet/user/:user_id", (req, res) => {
  // TODO : Validate
  const user_id = req.params.user_id;
  Tweet.find(
    {
      user_id: user_id,
    },
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ status: "FAILURE", err: JSON.stringify(err, null, 2) });
      } else {
        return res.send({ status: "SUCCESS", tweets: result });
      }
    }
  );
});

//////

expressApp.post("/tweet", (req, res) => {
  // TODO : validation
  const { tweet, user_id } = req.body;
  const newTweet = new Tweet();
  newTweet.tweet = tweet;
  newTweet.user_id = user_id;
  newTweet.save((err, dbTweet) => {
    if (err) {
      return res.send({
        status: "FAILURE",
        data: { msg: "Could not save", err: JSON.stringify(err) },
      });
    } else {
      return res.send({ status: "SUCCESS", data: { tweet_id: dbTweet._id } });
    }
  });
});

expressApp.get("/hometimeline/:user_id", (req, res) => {
  //TODO : Validation
  const user_id = req.params.user_id;
  const tweets = [];
  Follower.find({ user_id: user_id }, (err, dbResult) => {
    if (err) {
      return res
        .status(500)
        .send({ msg: "Error", err: JSON.stringify(err, null, 2) });
    } else {
      console.log(dbResult);
      return res.send({ data: dbResult });
    }
  });
});
