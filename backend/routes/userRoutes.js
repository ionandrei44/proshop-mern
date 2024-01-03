import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUser,
  getUserByID,
  getUsers,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", protect, admin, getUsers);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete("/:id", protect, admin, deleteUser);
router.get("/:id", protect, admin, getUserByID);
router.put("/:id", protect, admin, updateUser);

export default router;
