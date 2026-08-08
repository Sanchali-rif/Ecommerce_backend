import express from "express";

import {
    createCategory,
    fetchCategory,
    createItem,
    fetchAllItem,
    updateItem,
    removeItem
} from "../controllers/retailer.controller.js";

const router = express.Router();

// Category routes
router.post("/category", createCategory);
router.get("/category", fetchCategory);

// Item routes
router.post("/item", createItem);
router.get("/item", fetchAllItem);
router.patch("/item/:id", updateItem);
router.delete("/item/:id", removeItem);

export default router;