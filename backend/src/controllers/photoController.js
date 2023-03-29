/* Importing the package to format the date. */
const dayjsPluginUTC = require("dayjs/plugin/utc");
const dayjs = require("dayjs");

dayjs.extend(dayjsPluginUTC);

const { fetchClarifai } = require("../services/fetchClarifai");
const { tagValidator } = require("../services/tagValidator");
/* Importing the upload function from the storageImg file. */
const { storePhoto } = require("../services/storageImg");

const photoModel = require("../models/photoModel");

async function photoValidator(req, res) {
  /* collect the image "photoBase64" from Front */
  const photoBase64 = await req.body.photoBase64;

  /* Pass it in the service file FetchClarifai which fetch the API */
  const tags = await fetchClarifai(photoBase64);

  /* we store the photo in the updload folder and rename it with unique id */

  /* We get an array of objects as answer so we get precisely the tags */
  /* I pass the array of tags into the tagValidator */

  const isPhotoValid = tagValidator(tags);

  /* Setting the parameters for the insertion of the image in the DB */

  /* Function to upload the image in the database */

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const createdAt =
    `${year}` +
    `/${`${month}`.padStart(2, "0")}/${`${day}`.padStart(
      2,
      "0"
    )} ${`${hour}`.padStart(2, "0")}:${`${minute}`.padStart(2, "0")}`;
  console.warn(createdAt);
  // const createdAt = dayjs().local().format("YYYY-MM-DD");
  const score = 30;
  const userId = req.user.id;

  /* if the photo is valid, we run the above function and it's saved in the DB */

  if (isPhotoValid) {
    const imgName = await storePhoto(photoBase64);
    photoModel.insertImg(imgName, createdAt, score, userId);
  } else {
    res.status(403).json(" photo not uploaded");
    return;
  }

  /* I send the boolean to the front */
  res.send(isPhotoValid);
}

async function allPictures(req, res) {
  const pictures = await photoModel.getAllPictures();
  res.json(pictures);
}

async function allPicturesByUserId(req, res) {
  const userId = req.user.id;
  const pictures = await photoModel.getPicturesByUserId(userId);
  res.json(pictures);
}

module.exports = {
  photoValidator,
  allPictures,
  allPicturesByUserId,
};
