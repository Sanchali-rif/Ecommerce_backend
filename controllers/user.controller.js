import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
export const handleRegisterUser = async (req,res) =>{
    const {name,password,email,role} = req.body;
    

    const userFound = await User.findOne({
        "email":email,
    });

    if(userFound){
        return res.json({
            "message":"User Already exists"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const userCreated = await User.create({
        name: name,
        email: email,
        password: hash,
        role: role
    });

    console.log(userCreated);

    return res.json({
        "message":"User created!"
    });
}

export const handleLoginUser = async (req,res)=>{
    const{email,password}=req.body;

    const user=await User.findOne({
        email: email
    });

    if(!user){
        return res.json({
            message:"User not found"
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        return res.json({
            message:"User not found"
        });
    }

    const data = {
        email:user.email,
    }

    const jwt_generated = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '15m' });

    data.access_token = jwt_generated;
    
    return res.json({
        message:"User created",
        data:data
    });
}