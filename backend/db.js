const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebook?tls=false&readPreference=primary&directConnection=true";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo");
    })
}

module.exports = connectToMongo;