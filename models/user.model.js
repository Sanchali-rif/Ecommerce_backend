import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        role:{
            type: String,
            enum: ["USER","RETAILER"],
            default: true,
        }

    },
    {timestamps:true}
);


const User = mongoose.model('USER', schema);

export default User;

