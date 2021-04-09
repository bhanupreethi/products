var express = require('express');
var mongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')

var app = express();
var dbo = null;
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoClient.connect(
    'mongodb://root:thunder%4054Struck@142.93.118.128:27017/admin', {
    auth: {
      user:'bp', 
      password:'bhanu@15',
      "useUnifiedTopology": true
    },
    useNewUrlParser:true
  }, function(err, client) {
    if (err) {
      console.log(err);
    }else{
        dbo = client.db('products');
        console.log("conn\'d");
    }
}); 

app.post('/postProd',jsonParser,(req,res)=>{
    console.log(req.body);
    var {product,price,desp} = req.body;
    //res.send(product,price,desp);
    var myObj = {product : product,price : price,desp : desp};
    dbo.collection("products").insertOne(myObj,(err,data)=>{
        if(err) console.log(err);
        else {
            res.send('inserted successfully !');
        }
    })

})

app.get('/getProd',(req,res)=>{
    dbo.collection("products").find({}).toArray((err,data)=>{
        if(err) console.log(err);
        else {
            res.send(data);
        }
    })

});

app.listen(8084);

