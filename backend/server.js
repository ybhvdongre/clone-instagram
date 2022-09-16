const express = require("express");
var path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8080;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/clone-app-demo");

var userSchema = new mongoose.Schema(
  {
    email: String,
    fullname: String,
    username: String,
    password: String,
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/user", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/", "index.html"));
});

app.listen(PORT, () => {
  console.log(`APP is running on http://localhost:${PORT}/login`);
});
