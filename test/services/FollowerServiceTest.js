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

function addFollower() {
  // const followerDetails = {
  //   user_id: Math.floor(Math.random() * 400),
  //   follower_id: "123",
  // };

  const followerDetails = {
    user_id: "5f261a987989a7c1b4794172",
    follower_id: "5f261ad89658c2c1e1f14c6e",
  };

  axios
    .post(`${PATH}/addfollower`, followerDetails)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

addFollower();
