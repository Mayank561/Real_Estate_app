const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
<<<<<<< HEAD
const userRouter = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
=======

>>>>>>> 99d6c343f3f8357fd5d93e6e9431463143a9d330

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");
})
.catch((err)=>{
    console.log(err);
});

<<<<<<< HEAD
app.use(express.json());

app.listen(3000,()=>{
    console.log("server Listening on port 3000");
});

// define routes
app.use("/api/user", userRouter);
app.use("/api/auth",authRoute);
=======
app.listen(3000,()=>{
    console.log("server Listening on port 3000");
});
>>>>>>> 99d6c343f3f8357fd5d93e6e9431463143a9d330
