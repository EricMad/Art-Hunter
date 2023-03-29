const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { router } = require("./routes");

require("dotenv").config();

fs.mkdirSync(path.resolve(__dirname, "../public/assets/uploads"), {
  recursive: true,
});

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "https://localhost:3000",
    // WILD WIFI NETWORK
    // origin: process.env.FRONTEND_URL ?? "https://192.168.1.121:3000/",
    optionsSuccessStatus: 200,
  })
);

/* This is done to be able to access the public folder to show the images */
app.use(express.static("./public/assets/uploads"));
app.use(router);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found !" });
});

module.exports = app;
