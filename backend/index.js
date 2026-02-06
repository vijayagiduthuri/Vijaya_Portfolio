import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailRoutes from './src/routes/mailRoutes.js';
import { verifyTransporter, createMailTransporter } from './src/config/mailConfig.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173", "https://vijaya-portfolio.onrender.com","https://22l5smv2-5173.inc1.devtunnels.ms/"],
    credentials: true
}));

// Routes
app.use('/api', mailRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Vijaya Portfolio Backend API',
        version: '1.0.0',
        endpoints: {
            sendEmail: 'POST /api/send-email',
            emailHealth: 'GET /api/email-health'
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, async () => {
    console.log(`🚀 Server running at port: ${PORT}`);
    
    // Verify email service on startup
    const transporter = createMailTransporter();
    await verifyTransporter(transporter);
});