import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes.js';
import paymentsRoutes  from './paymentsRoutes.js'

router.use('/', userRoutes);
router.use('/', paymentsRoutes)

export default router;