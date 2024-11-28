const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt")
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const  SECRET_KEY= crypto.randomBytes(64).toString('base64');


exports.signup = async (req, res) => {

    const { username, email, password } = req.body;
    try{

        const existingUser = await userModel.findOne({ email:email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        });
        
        res.status(201).json(result);
    }catch(error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
    }                
}

        
exports.signin = async(req,res)=> {

    const {email, password} = req.body;
        try{
            const signedin = await userModel.findOne({email:email})
            if(!signedin){
                return res.status (200).json({message:"User not found"})
            }
            const matchedPassword = await bcrypt.compare(password, signedin.password)
          if(!matchedPassword){
            return res.status (400).json({message:"invalid password"})
          }
            const token = jwt.sign(
                { email: signedin.email, id: signedin._id},
                SECRET_KEY
            );
           
            res. status(201). json({user:signedin, token: token})
            }catch{
             
            res.status (500).json({message: "Something went wrong"})

        } 
}