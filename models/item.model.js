import mongoose from "mongoose";

const categories = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    totalItem: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const items = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        default:""
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CATEGORY",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Categories = mongoose.model("CATEGORY", categories);
export const Items = mongoose.model("ITEM", items);