const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

const productSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        price: Number 
});

const Product = mongoose.model("Product",productSchema);
    
//create
const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "dummy product 1",
    price: 10.5 
}); 

product 
    .save() 
    .then(result => {
        console.log(result);
    }) 
    .catch(err => {
        console.log(err);
    });

//read
//get producr by id
Product.findOne({_id:""})
    .exec()
    .then(prod => {
        console.log(prod.name);

    })
    .catch(err => {
        console.log(err);
    });


//update
//find the product by id first then update it 

Product.update({_id:""}, {price:100}) //that's the new price
.exec()
.then(result => {
    console.log(result);
    })
    .catch(err => {
    console.log(err);
    });

//delete
//delete product by id
Product.remove({_id:""})
    .exec()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

//list all products   
Product.find() 
    .exec() 
    .then(prod => {
        for(i=0;i<prod.length;i++)
            console.log("Name: "+prod[i].name+", Price: "+prod[i].price);
    }) 
    .catch(err => {
        console.log(err);
    }); 