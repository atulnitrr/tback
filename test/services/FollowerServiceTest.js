const axios = require("axios");

const PATH = "http://localhost:3033";

function getFolloweers() {
  const user_id = "123";
  axios
    .get(`${PATH}/followers/${user_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
      }
    });
}

function getFollwees() {
  const user_id = "123";
  axios
    .get(`${PATH}/followees/${user_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
      }
    });
}

// getFolloweers();
// getFollwees();

function addFollower(follow) {
  const followerDetails = {
    user_id: "5f259055c189e1b1ffec9c81_6",
    follower_id: "5f261a987989a7c1b4794172_9",
    following: follow,
  };

  axios
    .post(`${PATH}/follow`, followerDetails)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

addFollower(false);
addFollower(true);

function doIFollow() {
  const followerDetails = {
    user_id: "5f310a042ebd92d528a82f7e",
    follower_id: "5f2aa84f8130cd53566c5851",
  };

  axios
    .post(`${PATH}/doifollow`, followerDetails)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// doIFollow();
