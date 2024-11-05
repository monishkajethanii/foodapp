const express = require("express");
const menu = require("./models/menuModel");
const db = require("./db");
const app = express();
const userRoute = require("./routes/userRoute");
app.use(express.json());
const menuRoute = require("./routes/menuRoutes");
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api/menu/", menuRoute);
app.use("/api/users/", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`)); 
