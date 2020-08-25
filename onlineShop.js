var express = require('express')
var app = express()

app.use(express.json()) 

let products =[
    { id: 1, name: "A", price: 10},
    { id: 2, name: "B", price: 20},
    { id: 3, name: "C", price: 30},
    { id:4 , name: "D", price: 40}
]

let count = products.length;
const productbaseurl = "/products";


// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function (req, res) {
//  res.send('hello world');
//})

//get all products
app.get(productbaseurl, function (req, res) {
    //json: send json object
    res.json(products);
  })

//get a product by id
app.get(productbaseurl+'/:id', function (req, res) {
    let ids = parseInt(req.params.id);
    const product = products.find(pr => pr.id===ids);
    //send : send it as it is
    res.send(product);
  })

//add product to the list
app.post(productbaseurl, function (req, res) {
    const product = {
        id : ++count,
        name: req.body.name,
        price: req.body.price
    }
    products.push(product);
    res.send(products);
  })

//delete product by id
app.delete(productbaseurl+'/:id', function (req,res){
    let ids = parseInt(req.params.id);
    const product = products.find(pr => pr.id===ids);
    const i = products.indexOf(product);
    products.splice(i,1);
    res.json(products);

})

//update product by id
app.put(productbaseurl+'/:id', function (req,res){
    let ids = parseInt(req.params.id);
    const product = products.find(pr => pr.id===ids);
    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);

})

app.listen(3000)
