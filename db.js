const mongoose = require("mongoose");
var url =
  "mongodb+srv://monishka:mongodb%4014@cluster0.kg2g2.mongodb.net/joey-order";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on("connected", () => {
  console.log("mongo db connection successfully");
});
db.on("error", () => {
  console.log("connection failed");
});
module.exports = mongoose;