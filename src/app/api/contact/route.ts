import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400 }
      );
    }

    // Send email to admin
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'info@voytrail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%); color: white; padding: 20px; border-radius: 8px; }
              .content { padding: 20px; border: 1px solid #eee; border-radius: 8px; margin-top: 20px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0369a1; margin-bottom: 5px; }
              .footer { text-align: center; color: #666; font-size: 12px; padding-top: 20px; border-top: 1px solid #eee; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div>${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div>${escapeHtml(message).replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent via Voytrail Contact Form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: email,
        subject: 'We received your message! 📬',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
                .content { padding: 30px 20px; }
                .footer { text-align: center; color: #666; font-size: 12px; padding-top: 20px; border-top: 1px solid #eee; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thanks for reaching out! 🎉</h1>
                </div>
                <div class="content">
                  <p>Hi ${escapeHtml(name)},</p>
                  <p>We've received your message and we'll get back to you as soon as possible. Our team typically responds within 24 hours.</p>
                  <p>In the meantime, if you have any other questions, feel free to explore our website or contact us via our other channels.</p>
                  <p>Best regards,<br>The Voytrail Team</p>
                </div>
                <div class="footer">
                  <p>© 2025 Voytrail. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (error) {
      console.warn('User confirmation email failed:', error);
      // Don't throw - admin email was sent successfully
    }

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
