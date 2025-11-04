const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://dentistry2-frontend.onrender.com',
    'https://*.render.com'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure email transporter for Mail.ru/Inbox.ru
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER, // Your email: iamyapi@inbox.ru
    pass: process.env.EMAIL_PASS  // Your regular email password
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 30000, // 30 seconds
  greetingTimeout: 30000,
  socketTimeout: 30000
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, date, contact_method, message } = req.body;

    // 1. Send email to clinic (your working email)
    const clinicMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'iamyapi@inbox.ru',
      subject: 'Новая заявка на консультацию',
      html: `
        <h2>Новая заявка с сайта</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td><strong>Имя Фамилия</strong></td>
            <td>${name || '-'}</td>
          </tr>
          <tr>
            <td><strong>Почта</strong></td>
            <td>${email || '-'}</td>
          </tr>
          <tr>
            <td><strong>Телефон</strong></td>
            <td>${phone || '-'}</td>
          </tr>
          <tr>
            <td><strong>Интересующая услуга</strong></td>
            <td>${service || '-'}</td>
          </tr>
          <tr>
            <td><strong>Дата записи</strong></td>
            <td>${date || '-'}</td>
          </tr>
          <tr>
            <td><strong>Способ связи</strong></td>
            <td>${contact_method || '-'}</td>
          </tr>
          <tr>
            <td><strong>Комментарии</strong></td>
            <td>${message || '-'}</td>
          </tr>
        </table>
      `,
      replyTo: email
    };

    await transporter.sendMail(clinicMailOptions);

    // 2. Send confirmation email to client
    if (email) {
      const clientMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Подтверждение записи в Нор-Арт Дент',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c5f7c;">Здравствуйте, ${name || 'клиент'}!</h2>
            
            <p>Спасибо за обращение в Нор-Арт Дент! Мы получили вашу заявку и свяжемся с вами в ближайшее время для подтверждения записи.</p>
            
            <h3 style="color: #2c5f7c;">Детали вашей заявки:</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Услуга:</strong> ${service || '-'}</li>
              <li><strong>Дата записи:</strong> ${date || '-'}</li>
              <li><strong>Способ связи:</strong> ${contact_method || '-'}</li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="color: #666;">
              С уважением,<br>
              <strong>Команда Нор-Арт Дент</strong><br>
              Тел.: +7 (925) 535-50-00
            </p>
          </div>
        `
      };

      await transporter.sendMail(clientMailOptions);
    }

    res.json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service ready`);
});
