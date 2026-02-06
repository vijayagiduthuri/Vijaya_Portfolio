import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create and configure the mail transporter
export const createMailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    return transporter;
};

// Verify transporter connection
export const verifyTransporter = async (transporter) => {
    try {
        await transporter.verify();
        console.log('✅ Email service is ready to send messages');
        return true;
    } catch (error) {
        console.error('❌ Email service error:', error.message);
        return false;
    }
};
