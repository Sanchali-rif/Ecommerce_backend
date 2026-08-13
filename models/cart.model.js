import mongoose from "mongoose";
const cartSchema=new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.type.objectId,
            ref:"USER",
            require:true,
            unique:true
        },
    },
    {
        timestamps:true,
    }
)
export const cart=mongoose.model("cart",cartSchema)