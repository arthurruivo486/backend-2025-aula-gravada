import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes.js';
import paymentsRoutes  from './paymentsRoutes.js'

routes.use('/api', userRoutes);
routes.use('/api', paymentsRoutes)

export default router;