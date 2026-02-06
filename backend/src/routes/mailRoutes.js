import express from 'express';
import { sendContactEmail, checkEmailService } from '../controllers/mailController.js';

const router = express.Router();

// POST /api/send-email - Send contact form email
router.post('/send-email', sendContactEmail);

// GET /api/email-health - Check email service health
router.get('/email-health', checkEmailService);

export default router;
