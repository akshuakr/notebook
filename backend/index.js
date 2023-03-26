const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("Hello World");
})
app.listen(port, ()=>{
    console.log(`Backend app is listening at https://localhost:${port}`);
})