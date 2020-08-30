var express = require('express');
var app = express();
var router = express.Router()

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email:String,
    token:String,
    role: String
  });

  const Users = mongoose.model("Users", userSchema);
  
// define the home page route
router.get('/', function (req, res) {
  res.send('Users home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About users')
})

module.exports = router

