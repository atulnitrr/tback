const axios = require("axios");

const PATH = "http://localhost:3033";

axios
  .get(`${PATH}/health`)
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
