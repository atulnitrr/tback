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
    user_id: "5f259055c189e1b1ffec9c81",
    follower_id: "5f261a987989a7c1b4794172",
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
