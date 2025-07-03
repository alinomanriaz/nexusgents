// lib/mailSender.js
import { Resend } from 'resend';

// Ensure environment variable is defined
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error('RESEND_API_KEY is not set in the environment');
}
const resend = new Resend(apiKey);

// Define the expected input shape using a TypeScript type
type MailSenderParams = {
  name: string;
  email: string;
  message: string;
  number?: string; // optional in case number is not always required
};

type MailSenderResult = {
  success: boolean;
  response?: unknown;  // You can refine this based on `resend.emails.send()` return type
  error?: unknown;
};

export async function mailSender({ name, email, message, number }) {
  try {
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with a verified domain
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return { success: true, response };
  } catch (error) {
    console.error('Send error:', error);
    return { success: false, error };
  }
}
