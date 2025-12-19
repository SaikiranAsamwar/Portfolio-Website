const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if email is configured
  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_16_character_app_password_here') {
    // Log to console instead
    console.log('==========================================');
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('==========================================');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message:\n${message}`);
    console.log('==========================================');
    console.log('⚠️  Email not configured. Set EMAIL_PASS in .env.local');
    console.log('📖 See EMAIL_SETUP_GUIDE.md for instructions');
    console.log('==========================================\n');
    
    return res.status(200).json({ 
      ok: true, 
      message: "Message received! (Email will be sent once configured)",
      warning: "Email not yet configured"
    });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'saikiranasamwar@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'saikiranasamwar@gmail.com',
      to: 'saikiranasamwar@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website contact form.</p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Contact form email sent to saikiranasamwar@gmail.com from ${email}`);
    res.status(200).json({ ok: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    
    // Log to console as fallback
    console.log('==========================================');
    console.log('📧 CONTACT FORM SUBMISSION (Email Failed)');
    console.log('==========================================');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message:\n${message}`);
    console.log('==========================================\n');
    
    res.status(500).json({ 
      error: "Failed to send email. Your message has been logged.", 
      details: error.message 
    });
  }
}
