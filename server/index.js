const express = require("express");
const cors = require("cors");
const app = express();
// const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

module.exports = app



