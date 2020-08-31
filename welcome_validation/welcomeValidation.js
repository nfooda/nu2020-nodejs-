var express = require('express')
var router = express.Router()

const Joi = require('joi');

//Schema
const schema = Joi.object({
    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    age: Joi.number()
})



router.get('/', function(req,res) {
    const result = schema.validate(req.body);
    if(result.error){
        //return: break the function
        return res.status(400).send("Parameter name is missing or invalid");
    }
    res.send('welcome '+req.body.name);
})

module.exports = router