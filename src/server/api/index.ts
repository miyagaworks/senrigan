// src/server/api/index.ts
import express from 'express';
import contactRouter from './contact.js';
import applyRouter from './apply.js';

const router = express.Router();

router.use('/contact', contactRouter);
router.use('/apply', applyRouter);

export default router;