import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
  getOrderById,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", protect, admin, getOrders);
router.post("/", protect, addOrderItems);
router.get("/mine", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

export default router;
