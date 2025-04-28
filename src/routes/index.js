import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes.js';
import paymentsRoutes  from './paymentsRoutes.js'

router.use('/api', userRoutes);
router.use('/api', paymentsRoutes)

export default router;