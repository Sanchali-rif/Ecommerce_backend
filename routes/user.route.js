import express from "express";
import { handleLogOut, handleRegisterUser} from "../controllers/user.controller.js";
import { handleLoginUser } from "../controllers/user.controller.js";
import { isUserAuthenticated } from "../middlewares/user.middleware.js";

export const userRouter = express.Router();

console.log("user.route.js loaded");

userRouter.post("/register",handleRegisterUser);

userRouter.post("/login", handleLoginUser);
userRouter.post("/logout",isUserAuthenticated,handleLogOut);

userRouter.get("/me",isUserAuthenticated,(req,res)=>{
    const {email} = req;

    res.json({
        message:"You are loged in",
        email:email
    });
    
});



