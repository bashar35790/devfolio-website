import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type SendEmailParams = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: SendEmailParams) {
  if (!resend) {
    console.warn(
      "RESEND_API_KEY not set. Skipping email send. Set it in .env.local"
    );
    return { success: true, simulated: true };
  }

  const data = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "bashar35790@gmail.com",
    subject: `Portfolio Contact from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>`,
  });

  return data;
}
