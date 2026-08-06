import express from "express";
import { handleLogOut, handleRegisterUser} from "../controllers/user.controller.js";
import { handleLoginUser } from "../controllers/user.controller.js";
import { isUserAuthenticated } from "../middlewares/user.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

export const dummyRouter = express.Router();

dummyRouter.get("/user",isUserAuthenticated,(req,res)=>{
    return res.json({
        message:"You are user"
    });
});
dummyRouter.get("/retailer-only",isUserAuthenticated,authorizationMiddleware("RETAILER"),(req,res)=>{
    return res.json({
        message:"you are retailer"
    });
});



