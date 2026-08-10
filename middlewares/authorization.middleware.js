import User from "../models/user.model.js";
export const authorizationMiddleware = (roles) =>{
    return async (req,res,next)=>{
        const user = await User.findOne({email:req.email})

        if(!user){
            return res.json({
                message:"user not found"
            })
        }

        const role=user.role

        if (role=="RETAILER"){
            return next()
        }
        return res.json({
            message:"you are not authorized"
        })
    }
}

//req.email->db data
//db data->role
//role ar roles match
//jodi equal then next()
//jodi not equal then res.json({msg:"you are not authorized"})