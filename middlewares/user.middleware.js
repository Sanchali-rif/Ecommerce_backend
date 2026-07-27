
import jwt from "jsonwebtoken";
export const isUserAuthenticated = async (req,res,next) =>{
    const rawToken = req.headers.authorization;

    if(!rawToken){
        return res.json({
            message:"No token"
        });
    };

    const token = rawToken.split("Bearer ")[1];

    if(!token){
        res.json({
            message:"User is not authenticated",
        });
    };
    
    const decoded = {};
    try {
        decoded.data = jwt.verify(token, process.env.JWT_SECRET);
    }catch (error) {
        res.json({
            message:"Not a valid Token",
        });
    }

    req.email = decoded.data.email;

    next();

}