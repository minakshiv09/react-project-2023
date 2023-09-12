import express from 'express';
import { fetchAllData } from '../controllers/chartController.js';

const chartRouter = express.Router()

chartRouter.get('/chart/all',fetchAllData);

export default chartRouter;