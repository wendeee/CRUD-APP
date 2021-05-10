const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({
  path: "./config.env",
});
mongoose
  .connect(
    `mongodb+srv://wendy:${process.env.ATLAS_PASSWORD}@crudappdata.eoxtw.mongodb.net/crudApp?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Connection Failed"));

const users = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/app/data", users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
