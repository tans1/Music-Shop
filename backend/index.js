const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const musicRoute = require("./routes/musicRoute");

require("dotenv").config();
require("./config/db");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use("/", musicRoute);

// Global middleware
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message
  });
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));
