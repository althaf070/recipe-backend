const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const users = require('../models/userSchema')
exports.userRegister = async(req,res) =>{
    const {username,email,password} = req.body

    try {
       const existingUser = await users.findOne({email})
       if(existingUser)
         { res.status(400).json('Email already exists')
    }else{
            const hashPswd = await bcrypt.hash(password,10)
            const newUser = new users({
                username,
                email,
                password:hashPswd,
                profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
         }
    } catch (err) {
        console.log(err);
        
    }
}

exports.userLogin=async(req, res)=>{
    console.log('inside login function');
    const {email, password}=req.body
    try{
    const existingUser= await users.findOne({email})
    if(existingUser) {
    let isMatch = await bcrypt.compare(password,existingUser.password)
    if(existingUser.password==password || isMatch){
    const token =jwt.sign({userId: existingUser._id},process.env.jwt_password)
    res.status(200).json({existingUser, token})
    } else {
    res.status(406).json("invalid password")
    }
    }else{
    res.status(404).json("user not found")
    }
}catch(err){
res.status(401).json(err)
}
}