const axios = require("axios");

const PATH = "http://localhost:3033";

function testLogin() {
  const userDetail = {
    email_id: "atulkumar458@gmail.com",
    password: "12345",
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

testLogin();

function testSignUp() {
  const userDetail = {
    first_name: "atul",
    last_name: `kumar_${Math.floor(Math.random() * 3000)}@gmail.com`,
    email_id: `atulkr${Math.floor(Math.random() * 3000)}@gmail.com`,
    password: "12345",
  };

  axios
    .post(`${PATH}/signUp`, userDetail)
    .then((res) => console.log(res.data))
    .catch((error) => {
      console.log(error.response);
    });
}
// testSignUp();

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
