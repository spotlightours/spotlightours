import express from 'express';
import { createBlog, getAllBlog, getSingleBlog } from '../controllers/blogController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

// create a new review to a tour

router.post('/', verifyAdmin, createBlog);
router.get('/:id', verifyUser, getSingleBlog);
router.get('/', verifyUser, getAllBlog);




export default router;