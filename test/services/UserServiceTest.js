const axios = require("axios");

const PATH = "http://localhost:3033";

function testSignUp() {
  const userDetail = {
    email_id: "atulk@gmail.com",
    password: "1234",
  };

  axios
    .post(`${PATH}/signUp`, userDetail)
    .then((res) => console.log(res.data))
    .catch((error) => {
      console.log(error);
    });
}
testSignUp();

function testHealth() {
  axios
    .get(`${PATH}/health`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// testHealth();
