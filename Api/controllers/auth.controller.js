 const User = require("../models/user.model");
//  securing the user password
 const bcryptjs = require("bcrypt");
const { errorHandler } = require("../utils/error");
 const signup = async(req,res, next)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username, email, password, hashedPassword});
    try{
    await newUser.save();
    res.status(201).json("user created successfully");
    }catch(error){
        next('error');
    } 
};



module.exports = signup;