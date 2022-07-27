let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoLiveUrl;
let db;

app.get('/',(req,res)=>{
    res.send('Welcome to Amazon Clone Database Document')
})

app.get('/categories',(req,res)=>{
    db.collection('categories').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/products',(req,res)=>{
    db.collection('products').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
    
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while connecting");
    db = client.db('amazonclone')
    app.listen(port,() =>{
        console.log(`listening on port ${port}`)
    })
})