import express from "express";
import { handleRegisterUser} from "../controllers/user.controller.js";
import { handleLoginUser } from "../controllers/user.controller.js";

export const userRouter = express.Router();

console.log("user.route.js loaded");

userRouter.post("/register",handleRegisterUser);

userRouter.post("/login", handleLoginUser);



