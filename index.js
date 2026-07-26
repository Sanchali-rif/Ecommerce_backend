import express from "express";
import dbconnect from "./config/db.js";
import { userRouter } from "./routes/user.route.js";
const app = express();
import "dotenv/config";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.get("/health",(req,res)=>{
    res.json({
        "status":"ok"
    });
})

const URI = process.env.MONGODB_URI


app.listen(8000,()=>{
    console.log("Server is runinng on port 8000");
    dbconnect(URI);
})