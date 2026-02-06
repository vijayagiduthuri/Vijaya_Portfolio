import { createMailTransporter } from '../config/mailConfig.js';
import { createContactEmailTemplate, createAutoReplyTemplate } from '../templates/emailTemplate.js';

export const sendContactEmail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        const transporter = createMailTransporter();

        // Email to portfolio owner (you)
        const mailToOwner = {
            from: {
                name: 'Portfolio Contact Form',
                address: process.env.EMAIL_USER
            },
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: createContactEmailTemplate({ name, email, subject, message })
        };

        // Auto-reply to the sender
        const autoReply = {
            from: {
                name: 'Vijaya Giduthuri',
                address: process.env.EMAIL_USER
            },
            to: email,
            subject: 'Thank you for contacting me!',
            html: createAutoReplyTemplate(name)
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailToOwner),
            transporter.sendMail(autoReply)
        ]);

        console.log(`✅ Contact form email sent from: ${email}`);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

// Health check endpoint for email service
export const checkEmailService = async (req, res) => {
    try {
        const transporter = createMailTransporter();
        await transporter.verify();
        
        res.status(200).json({
            success: true,
            message: 'Email service is operational',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(503).json({
            success: false,
            message: 'Email service is unavailable',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
