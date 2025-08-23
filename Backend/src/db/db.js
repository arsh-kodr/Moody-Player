const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected To DB");
    })
    .catch((err) => console.log("Error in Connecting to DB", err));
}

module.exports = connectToDB;