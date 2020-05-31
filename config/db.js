const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () =>
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("mongo connected"))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });

module.exports = connectDB;
