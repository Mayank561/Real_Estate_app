const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");
})
.catch((err)=>{
    console.log(err);
});

app.listen(3000,()=>{
    console.log("server Listening on port 3000");
});