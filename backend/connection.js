const mongoose = require("mongoose");

const url =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/othelo?retryWrites=true&w=majority";

// asynchronous function
mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
