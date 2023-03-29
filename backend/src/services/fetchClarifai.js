const axios = require("axios");
require("dotenv").config();

async function fetchClarifai(imageB64) {
  const token = process.env.CLARIFAI_TOKEN;

  const data = {
    user_app_id: {
      user_id: process.env.CLARIFAI_USER_ID,
      app_id: process.env.CLARIFAI_APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            base64: imageB64,
          },
        },
      },
    ],
  };

  const requestOptions = {
    headers: {
      Accept: "application/json",
      Authorization: `Key ${token}`,
    },
  };

  const result = await axios.post(
    `https://api.clarifai.com/v2/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs`,
    data,
    requestOptions
  );

  return result.data.outputs[0].data.concepts;
}
module.exports = { fetchClarifai };
