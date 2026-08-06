export const authorizationMiddleware = (roles) =>{
    return (req,res,next)=>{

    }
}

//req.email->db data
//db data->role
//role ar roles match
//jodi equal then next()
//jodi not equal then res.json({msg:"you are not authorized"})