import express from "express";
const router = express.Router();

import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../models/checkObjectId.js";

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.get("/top", getTopProducts);
router.get("/:id", checkObjectId, getProductById);
router.put("/:id", protect, admin, checkObjectId, updateProduct);
router.delete("/:id", protect, admin, checkObjectId, deleteProduct);
router.post("/:id/reviews", protect, checkObjectId, createProductReview);

export default router;
