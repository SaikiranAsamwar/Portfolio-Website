# Email Setup Guide for Contact Form

Your contact form is now configured to send emails to **saikiranasamwar@gmail.com**.

## 🚀 Quick Setup (5 minutes)

### Step 1: Enable 2-Step Verification on Your Google Account

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find **"2-Step Verification"** and click on it
3. Follow the prompts to enable it (you'll need your phone)

### Step 2: Generate App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - **Note:** This option only appears after 2-Step Verification is enabled
2. In "Select app" dropdown, choose **Mail**
3. In "Select device" dropdown, choose **Other (Custom name)**
4. Enter name: **Portfolio Website**
5. Click **Generate**
6. Google will show you a 16-character password (example: `abcd efgh ijkl mnop`)
7. **Copy this password** (you won't see it again)

### Step 3: Add Password to Your Project

1. Open the file: `.env.local` in your portfolio-frontend folder
2. Replace `your_16_character_app_password_here` with your actual app password
3. Remove any spaces from the password
4. Save the file

Example:
```env
EMAIL_USER=saikiranasamwar@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

### Step 4: Restart Development Server

Stop your current server (Ctrl+C in terminal) and restart:

```bash
npm run dev
```

## ✅ Testing the Contact Form

1. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email at **saikiranasamwar@gmail.com**
5. You should receive the message!

## 🔒 Security Notes

- ✅ The `.env.local` file is already in `.gitignore` (won't be committed to Git)
- ✅ App passwords are safer than your main password
- ✅ You can revoke app passwords anytime from Google Account settings
- ✅ Never share your app password publicly

## 🚨 Troubleshooting

### "Invalid credentials" error
- Make sure 2-Step Verification is enabled
- Regenerate the app password and try again
- Remove any spaces from the password in .env.local

### "Less secure app access" message
- This shouldn't happen with app passwords
- If it does, use app passwords instead of regular password

### Email not arriving
- Check your spam folder
- Verify EMAIL_USER in .env.local matches your Gmail
- Check the terminal for error messages

## 📧 Email Format

When someone submits the contact form, you'll receive:

**Subject:** Portfolio Contact: Message from [Name]

**Content:**
- Name of sender
- Email address (you can reply directly)
- Their message

## 🌐 For Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Add environment variables in your hosting platform's dashboard:
   - `EMAIL_USER`: saikiranasamwar@gmail.com
   - `EMAIL_PASS`: your app password

2. **Vercel:** Settings → Environment Variables
3. **Netlify:** Site settings → Build & deploy → Environment
4. **AWS Amplify:** App settings → Environment variables

## 🔄 Alternative Email Services

If you prefer other email services:

### Using SendGrid (Recommended for production)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Replace nodemailer code with SendGrid API

### Using AWS SES
1. Set up AWS SES
2. Verify your email
3. Use AWS SDK to send emails

The current setup with Gmail is perfect for development and small-scale production use!

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal where `npm run dev` is running
3. Verify all steps above are completed correctly

---

**Email Configuration Complete!** 🎉

Your portfolio contact form is now fully functional and will send all messages to saikiranasamwar@gmail.com.
