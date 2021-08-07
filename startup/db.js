const mongoose = require("mongoose");
const config = require("config");

function connectDB() {
  mongoose
    .connect(config.get("mongoURI"), {
      userNameUrlParser: true,
      userUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => {
      console.log(`Could not connect to MongoDB. ERROR: ${err}`);
      process.exit(1);
    });
}

module.exports = connectDB;
