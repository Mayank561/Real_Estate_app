const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./routes/user.route");
const authRoute = require("./routes/auth.route");

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");
})
.catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.listen(3000,()=>{
    console.log("server Listening on port 3000");
});

// define routes
app.use("/api/user", userRouter);
app.use("/api/auth",authRoute);

// middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
