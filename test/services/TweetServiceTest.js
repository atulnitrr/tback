const axios = require("axios");

const PATH = "http://localhost:3033";

function getTweetByUser() {
  const user_id = "111";
  axios
    .get(`${PATH}/tweet/user/${user_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
      console.log("-----");
      console.log(JSON.stringify(err, null, 2));
    });
}

getTweetByUser();

function postTweet() {
  const tweetData = {
    tweet: "Hello tweet  " + Math.floor(Math.random() * 4000),
    user_id: "111",
  };
  axios
    .post(`${PATH}/tweet`, tweetData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// postTweet();
