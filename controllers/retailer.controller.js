import { Categories, Items } from "../models/item.model.js";

export const createCategory = async (req,res) =>{
    try{
        const{name}=req.body;
        if(!name){
            return res.json({
                message:"Category name is required"
            })
        }
        const existingCategory=await Categories.findOne({
            name:{$regex: `^${name}$`, $options: "i"}
        })
        if(existingCategory){
            return res.json({
                message:"category already exists"
            })
        }
        const category = await Categories.create({
            name
        })
        return res.json({
            message:"Category created successfully",
            category
        })
    }catch(error){
        return res.json({
            message:"server error"
        })
    }
}

export const fetchCategory = async(req,res) =>{
    
    try{
        const categories=await Categories.find({})
        return res.json({
            categories
        })
    }catch(error){
        return res.json({
            message:"server error",
            error:error.message
        })
    }
}

export const createItem = async(req,res) =>{
    try{
        const{name,price,category}=req.body
        if(!name || !price || !category){
            return res.json({
                message:"name,price,category required"
            })
        }
        const item=await Items.create({
            name,
            price,
            category
        })
        return res.json({
            message:"Item created",
            item
        })
    }catch(error){
        return res.json({
            message:"server error",
            error:error.message
        })
    }
}

export const fetchAllItem = async(req,res) =>{
    try {
        const items = await Items.find({});

        return res.json({
            items
        });

    } catch (error) {
        return res.json({
            message: "server error",
            error: error.message
        });
    }
}

export const updateItem = async (req,res)=>{
    try{
        const {id} = req.params;
        const item=await Items.findById(id)
        if (!item) {
            return res.json({
                message: "Item not found"
            });
        }
        const updatedItem = await Items.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        return res.json({
            message: "Item updated successfully",
            item: updatedItem
        });

    } catch (error) {
        return res.json({
            message: "server error",
            error: error.message
        });
    }
    
}

export const removeItem = async (req, res) => {
    try {
    
        const { id } = req.params;

        const item = await Items.findByIdAndDelete(id);

        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }

        return res.status(200).json({
            message: "Item deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// export const fetchItemByCategory = (req,res)=>{

// }

