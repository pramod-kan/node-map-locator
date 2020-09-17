const express = require('express');
const DataStore=require('nedb');
const app = express();
app.listen(5000,()=>console.log('Listening to port 5000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
const database=new DataStore('database.db');
database.loadDatabase();

app.post('/api',(req,res)=>{
    console.log('I got request')
   
   const data=req.body;
   database.insert(data)
  
   res.json({
       status:'success',
       lat:data.latitude,
       lon:data.longitude
   });
})