import express from "express";
import {
  createBooking,
  getAllBooking,
  getSingleBooking,
} from "../controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// create a new review to a tour

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getSingleBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
