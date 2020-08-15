const axios = require("axios");
const Tweet = require("../../model/Tweets");

const PATH = "http://localhost:3033";

// {"_id":{"$oid":"5f259053c189e1b1ffec9c80"},"created":{"$date":"2020-08-01T15:54:59.646Z"},"updated":{"$date":"2020-08-01T15:54:59.646Z"},"tweet":"Hello tweet  1627","user_id":"111","__v":0}

// 5f259053c189e1b1ffec9c80

function getTweetById() {
  const tweet_id = "5f259053c189e1b1ffec9c80";
  axios
    .get(`${PATH}/tweet/${tweet_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // anything else
      }
    });
}

// getTweetById();

function getTweetByUser() {
  const user_id = "5f30a487283396c5a10ddb8e";
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
    user_id: "5f261a987989a7c1b4794172",
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

function getHomeTimeLine() {
  const user_id = "5f261a987989a7c1b4794172";

  axios
    .get(`${PATH}/hometimeline/${user_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getHomeTimeLine();

// 5f259056c189e1b1ffec9c82
// 5f259055c189e1b1ffec9c81

// function testAll() {
//   Tweet.find()
//     .exec()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// testAll();
