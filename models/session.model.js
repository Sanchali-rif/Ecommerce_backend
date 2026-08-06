import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        jti:{
            type: String,
            required: true,
        },
        isBlocked:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps:true
    }
);


const Session = mongoose.model('SESSION', schema);

export default Session;

