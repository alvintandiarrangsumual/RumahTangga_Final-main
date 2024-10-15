import express from "express";
import { createReview, deleteReview, getReviews } from "../controllers/review.controller.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router();

router.post("/", verifyToken, createReview)
router.delete("/:id", deleteReview)
router.get("/:gigId", getReviews)

export default router;