const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const trackerRoutes = require("./routes/trackerRoutes");
const { configDotenv } = require("dotenv");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/tracker", trackerRoutes);

app.get("/", (req, res) => {
  res.redirect("/tracker");
});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch {
    console.log("Connection failed");
  }
};

dbConnection();

app.listen(PORT, () => {
  console.log("Server is listening on PORT " + PORT);
});
