const fs = require("fs/promises");
const path = require("path");

const { v4: uuidv4 } = require("uuid");

async function storePhoto(image) {
  const nameOfImage = uuidv4();
  const imagePath = path.resolve("public/assets/uploads", `${nameOfImage}.jpg`);

  await fs.writeFile(imagePath, image, { encoding: "base64" });
  return nameOfImage;
}
module.exports = { storePhoto };
