import express from "express";
import { isUserAuthenticated } from "../middlewares/user.middleware.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

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
router.post("/category",
    isUserAuthenticated,
    authorizationMiddleware(["RETAILER"]),
    createCategory);

router.get("/category",fetchCategory);

// Item routes
router.post("/item",
    isUserAuthenticated,
    authorizationMiddleware(["RETAILER"]),
    createItem);

router.get("/item", fetchAllItem);

router.patch("/item/:id",
    isUserAuthenticated,
    authorizationMiddleware(["RETAILER"]),
    updateItem);

router.delete("/item/:id",
    isUserAuthenticated,
    authorizationMiddleware(["RETAILER"]),
    removeItem);

export default router;