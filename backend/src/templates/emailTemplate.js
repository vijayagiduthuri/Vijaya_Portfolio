// Email template for contact form submission - sent to portfolio owner
export const createContactEmailTemplate = (formData) => {
    const { name, email, subject, message } = formData;
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 30px;
                text-align: center;
                color: white;
            }
            .header h1 {
                font-size: 28px;
                margin-bottom: 10px;
                font-weight: 600;
            }
            .header p {
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .info-block {
                margin-bottom: 30px;
            }
            .label {
                font-size: 12px;
                text-transform: uppercase;
                color: #764ba2;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 8px;
            }
            .value {
                font-size: 16px;
                color: #333;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 10px;
                border-left: 4px solid #764ba2;
            }
            .message-box {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 10px;
                border-left: 4px solid #764ba2;
                line-height: 1.6;
                color: #333;
                white-space: pre-wrap;
                word-wrap: break-word;
            }
            .footer {
                background: #f8f9fa;
                padding: 25px 30px;
                text-align: center;
                color: #666;
                font-size: 13px;
                border-top: 1px solid #e9ecef;
            }
            .footer-icon {
                font-size: 32px;
                margin-bottom: 10px;
            }
            .divider {
                height: 1px;
                background: linear-gradient(to right, transparent, #764ba2, transparent);
                margin: 25px 0;
            }
            .badge {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📬 New Contact Form Submission</h1>
                <p>You've received a new message from your portfolio</p>
            </div>
            
            <div class="content">
                <div class="badge">🔔 New Message</div>
                
                <div class="info-block">
                    <div class="label">👤 From</div>
                    <div class="value"><strong>${name}</strong></div>
                </div>
                
                <div class="info-block">
                    <div class="label">✉️ Email Address</div>
                    <div class="value">
                        <a href="mailto:${email}" style="color: #764ba2; text-decoration: none; font-weight: 500;">
                            ${email}
                        </a>
                    </div>
                </div>
                
                <div class="info-block">
                    <div class="label">📋 Subject</div>
                    <div class="value"><strong>${subject}</strong></div>
                </div>
                
                <div class="divider"></div>
                
                <div class="info-block">
                    <div class="label">💬 Message</div>
                    <div class="message-box">${message}</div>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-icon">💼</div>
                <p><strong>Vijaya Giduthuri - Portfolio</strong></p>
                <p style="margin-top: 8px; color: #999;">This email was sent from your portfolio contact form</p>
                <p style="margin-top: 5px; color: #999;">Bhimavaram, Andhra Pradesh, India</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

// Auto-reply template - sent to the person who filled the form
export const createAutoReplyTemplate = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Me</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 50px 30px;
                text-align: center;
                color: white;
            }
            .header-icon {
                font-size: 64px;
                margin-bottom: 20px;
            }
            .header h1 {
                font-size: 32px;
                margin-bottom: 10px;
                font-weight: 600;
            }
            .header p {
                font-size: 16px;
                opacity: 0.95;
            }
            .content {
                padding: 40px 30px;
                line-height: 1.8;
            }
            .greeting {
                font-size: 20px;
                color: #333;
                margin-bottom: 20px;
                font-weight: 500;
            }
            .message-text {
                font-size: 16px;
                color: #555;
                margin-bottom: 15px;
            }
            .highlight-box {
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                padding: 25px;
                border-radius: 12px;
                margin: 30px 0;
                border-left: 5px solid #764ba2;
            }
            .highlight-box p {
                color: #333;
                font-size: 15px;
                margin-bottom: 8px;
            }
            .social-section {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 12px;
                text-align: center;
                margin: 30px 0;
            }
            .social-section h3 {
                color: #764ba2;
                margin-bottom: 20px;
                font-size: 18px;
            }
            .social-links {
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
            }
            .social-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 12px 24px;
                background: white;
                border: 2px solid #764ba2;
                border-radius: 25px;
                text-decoration: none;
                color: #764ba2;
                font-weight: 600;
                transition: all 0.3s ease;
                font-size: 14px;
            }
            .social-link:hover {
                background: #764ba2;
                color: white;
                transform: translateY(-2px);
            }
            .footer {
                background: #f8f9fa;
                padding: 30px;
                text-align: center;
                color: #666;
                font-size: 14px;
                border-top: 1px solid #e9ecef;
            }
            .footer-divider {
                height: 1px;
                background: linear-gradient(to right, transparent, #764ba2, transparent);
                margin: 20px 0;
            }
            .signature {
                margin-top: 30px;
                color: #764ba2;
                font-weight: 600;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="header-icon">✨</div>
                <h1>Thank You!</h1>
                <p>Your message has been received</p>
            </div>
            
            <div class="content">
                <div class="greeting">Hi ${name},</div>
                
                <p class="message-text">
                    Thank you for reaching out to me! I really appreciate you taking the time to get in touch.
                </p>
                
                <p class="message-text">
                    I've received your message and will review it carefully. I'll get back to you as soon as possible, 
                    typically within 24-48 hours.
                </p>
                
                <div class="highlight-box">
                    <p><strong>⏱️ Expected Response Time:</strong> 24-48 hours</p>
                    <p><strong>📍 Location:</strong> Bhimavaram, Andhra Pradesh, India</p>
                    <p><strong>✉️ Email:</strong> vijayagiduthuri2@gmail.com</p>
                </div>
                
                <p class="message-text">
                    In the meantime, feel free to check out my portfolio and connect with me on social media:
                </p>
                
                <div class="social-section">
                    <h3>🔗 Let's Connect</h3>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/vijaya-giduthuri" class="social-link">
                            <span>💼</span> LinkedIn
                        </a>
                        <a href="https://github.com/vijayagiduthuri" class="social-link">
                            <span>💻</span> GitHub
                        </a>
                    </div>
                </div>
                
                <p class="message-text">
                    Looking forward to connecting with you!
                </p>
                
                <div class="signature">
                    Best regards,<br>
                    Vijaya Giduthuri
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-divider"></div>
                <p><strong>Vijaya Giduthuri</strong></p>
                <p style="margin-top: 8px; color: #999; font-size: 13px;">
                    Full Stack Developer | Portfolio Website
                </p>
                <p style="margin-top: 10px; color: #999; font-size: 12px;">
                    This is an automated response confirming receipt of your message.
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
};
