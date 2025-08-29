import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
const eventEmitter = require('../config/eventEmitter');
// Load environment variables from a .env file
dotenv.config();

const sendEmail = async () => {
  try {
    // Create a transporter using your email service's SMTP details
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Define the email's content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient_email@example.com', // Can be an array of addresses
      subject: 'Test Email from Nodemailer',
      html: '<h1>Hello from your Node.js app!</h1><p>This is a test email sent with **Nodemailer**.</p>'
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!', info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};

/**
 * Handles the 'userRegistered' event by sending a welcome email.
 */
eventEmitter.on('userRegistered', (userData) => {
  sendEmail();
  console.log(`[Event Handler]: Sending welcome email to ${userData.email}`);
  
  // Example email sending logic (e.g., using a library like Nodemailer)
  // For demonstration, we'll just log to the console.
  console.log(`[Email Service]: Email sent to: ${userData.email}`);
  console.log(`[Email Service]: Subject: Welcome, ${userData.username}!`);
});