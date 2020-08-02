const axios = require("axios");

const PATH = "http://localhost:3033";

function testLogin() {
  const userDetail = {
    email_id: "atulk1@gmail.com",
    password: "34347",
  };

  axios
    .post(`${PATH}/login`, userDetail)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// testLogin();

function testSignUp() {
  const userDetail = {
    email_id: `atulkr${Math.floor(Math.random() * 3000)}@gmail.com`,
    password: "12345",
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
