
import jwt from "jsonwebtoken";
import Session from "../models/session.model.js";
export const isUserAuthenticated = async (req,res,next) =>{
    const rawToken = req.headers.authorization;

    if(!rawToken){
        return res.json({
            message:"No token"
        });
    };

    const token = rawToken.split("Bearer ")[1];

    if(!token){
        return res.json({
            message:"User is not authenticated",
        });
    };
    
    const decoded = {};
    try {
        decoded.data = jwt.verify(token, process.env.JWT_SECRET);
    }catch (error) {

        const decoded_ = jwt.decode(token);

        if(decoded_){
            await Session.updateOne({jti:decoded_.jti},{
                $set:{
                    isBlocked: true,
                }
            })
        }

        return res.json({
            message:"Not a valid Token",
        });
    }

    const jti_ = decoded.data.jti;


    const session = await Session.findOne({jti:jti_});

    if(!session){
        return res.json({
            message:"Jti is invalid"
        });
    };

    if(session.isBlocked == true){
        return res.json(
            {
                message:"You have already logged out."
            }
        )
    }

    req.email = decoded.data.email;
    req.decoded = decoded;

    next();
}