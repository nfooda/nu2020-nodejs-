var express = require('express');
var router = express.Router();
const app = express();
//const Joi = require('joi');

app.use(express.json())


var Welcome = require('./welcomeValidation')
app.use('/welcomeValidation', Welcome)

app.listen(3000)
