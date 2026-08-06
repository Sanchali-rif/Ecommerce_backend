import mongoose from "mongoose";

const categories = mongoose.Schema({


});



const items = mongoose.Schema({


});


export const Categories = mongoose.model("CATEGORY", categories);
export const Items = mongoose.model("ITEM", items);
