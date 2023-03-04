import express from 'express';
import { createTour } from '../controllers/tourController';
const router = express.Router();

//create a new tour

router.post('/', createTour);

export default router;