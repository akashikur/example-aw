const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch(() => {
    console.log("error while connecting");
  });
