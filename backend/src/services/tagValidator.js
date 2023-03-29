/* the function below checks if the tags results contains the "graffiti" tag and if the score for it is >0.99 (returns bool) 
 to test tags available : https://portal.clarifai.com/users/nnadroj/apps/art_hunters/model-mode/models/general-image-recognition */

function tagValidator(array) {
  const isPhotoValid = array.some((e) => {
    return e.name === "graffiti" && e.value > 0.9;
  });

  return isPhotoValid;
}

module.exports = { tagValidator };
