const axios = require("axios");
const { default: Axios } = require("axios");

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

function getUserInfo() {
  const user_id = "5f2edbe6baad253f99dbe80d";
  Axios.get(`${PATH}/user/${user_id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err.response));
}

async function getRecom() {
  try {
    console.log("fetching ");
    const response = await axios.get(`${PATH}/get_recom/users`);
    // console.log(response.data);
    console.log("fetching donee ");
  } catch (err) {
    console.log(err);
  }
}

getRecom();
console.log("Hello in data");
// getUserInfo();

// testSignUp();

// testLogin();
// testHealth();

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
