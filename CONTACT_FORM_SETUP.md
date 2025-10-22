# Contact Form Setup Guide

The contact form is now fully implemented with **Resend** for email delivery! It protects your email from being scraped by bots and sends beautifully formatted emails.

## ✅ Already Implemented

- ✅ Resend package installed
- ✅ Email sending logic implemented
- ✅ Beautiful HTML email template
- ✅ Form validation
- ✅ Error handling
- ✅ Environment variables configured

## 🚀 Quick Setup (3 Steps)

### Step 1: Sign up for Resend

1. Go to https://resend.com and sign up (free tier includes 100 emails/day, 3,000/month)
2. Verify your email address
3. Go to **API Keys** section: https://resend.com/api-keys
4. Click **"Create API Key"**
5. Copy your API key (starts with `re_`)

### Step 2: Add Your Domain (Optional but Recommended)

For production, you should send from your own domain:

1. Go to **Domains** section: https://resend.com/domains
2. Click **"Add Domain"**
3. Add `bash.company`
4. Add the DNS records they provide to your domain settings
5. Wait for verification (usually a few minutes)

**Note:** While waiting for domain verification, you can use `onboarding@resend.dev` to test.

### Step 3: Configure Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:

```env
# Your Resend API key from Step 1
RESEND_API_KEY=re_your_actual_api_key_here

# From email (use your verified domain or onboarding@resend.dev for testing)
RESEND_FROM_EMAIL=contact@bash.company

# Where you want to receive contact form submissions
RESEND_TO_EMAIL=your-email@bash.company
```

3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

## ✉️ Testing the Form

1. Open http://localhost:3000
2. Scroll to the contact form
3. Fill out the form and submit
4. Check your email inbox (the email you set in `RESEND_TO_EMAIL`)

## 📧 Email Features

The contact form sends a professionally formatted email with:
- Contact's name and email (with reply-to set automatically)
- Message content with proper formatting
- Styled HTML template matching your brand
- Mobile-friendly design

## 🔒 Security Features

- Email addresses are never exposed in the HTML
- Server-side validation prevents spam
- Rate limiting via Resend
- No client-side email exposure

## 🆓 Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- 1 verified domain
- All features included

This is more than enough for most small business websites!

## 🐛 Troubleshooting

**Form submits but no email received:**
- Check your `.env.local` file has the correct API key
- Make sure you restarted the dev server after adding environment variables
- Check Resend dashboard logs: https://resend.com/logs
- Verify your domain is verified (or use onboarding@resend.dev for testing)

**"Message received (email not configured)" message:**
- This means `RESEND_API_KEY` is not set in `.env.local`
- Add your API key and restart the server

**API key invalid error:**
- Make sure you copied the entire API key (starts with `re_`)
- Create a new API key if needed
- Check for any extra spaces in `.env.local`

## Option 2: Using SendGrid

1. Sign up at https://sendgrid.com
2. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```
4. Update the API route with SendGrid implementation

## Option 3: Using Web3Forms (No backend code needed)

1. Sign up at https://web3forms.com
2. Get your access key
3. Update `app/components/ContactForm.tsx` to use Web3Forms endpoint:
   ```typescript
   const response = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       access_key: "your_access_key_here",
       ...formData,
     }),
   });
   ```

## Option 4: Using Nodemailer (For SMTP)

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Add SMTP credentials to `.env.local`:
   ```
   SMTP_HOST=smtp.your-provider.com
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASSWORD=your-password
   ```
3. Update the API route with Nodemailer implementation

## Current Status

The form currently:
- ✅ Validates user input (name, email, message)
- ✅ Shows loading states
- ✅ Shows success/error messages
- ✅ Protects your email from bots
- ✅ Logs submissions to console
- ⏳ Needs email service configuration to send actual emails

Choose one of the options above to start receiving contact form submissions via email.
