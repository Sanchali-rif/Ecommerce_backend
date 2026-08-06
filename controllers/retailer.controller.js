import { Categories, Items } from "../models/item.model.js";

export const createCategory = (req,res) =>{
    return null;
    //body theke name bar korte hobe
    //check koro name ache ki na
    //ai name er cat ager theke ache ki na(lhs and rhs both capitalize or small case)->return with a res
    //name take db e store kore dao
    //return res
}

export const fetchCategory = (req,res) =>{
    return null;
    //just get the categories using using Model.find({})
}

export const createItem = (req,res) =>{
    return null;
    //get add non required and non default fields from body {..,..,..}=req.nody
    //optional validation(for now)
    //add to db
    //return response
}

export const fetchAllItem = (req,res) =>{
    return null;
    //just get the items
}

export const updateItem = (req,res)=>{
    // "/something/something/:id
    const {id} = req.params;
    //fetch the item using item-id
    //check item exits or not
    //it exits then update the item->what to update? {..,..,..}=req.body update mere debo jeta notun thakbe update hoi jabe+empty gulo ke skip
    //kore debo
    //jodi success then return res success
    //otherwise return res failure
    return null;
}

export const removeItem = (req,res)=>{
    //param id jinis ta lgbe
    const {id} = req.params;
    //item exits or not and then just perform deletion.
    return null;
}

// export const fetchItemByCategory = (req,res)=>{

// }

