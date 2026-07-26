import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
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