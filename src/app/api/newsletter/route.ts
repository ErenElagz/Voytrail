import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Newsletter <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Voytrail Newsletter! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
              .content { padding: 30px 20px; }
              .button { display: inline-block; background: #0369a1; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; margin: 20px 0; }
              .footer { text-align: center; color: #666; font-size: 12px; padding-top: 20px; border-top: 1px solid #eee; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Voytrail! 🚀</h1>
                <p>Thanks for joining our newsletter</p>
              </div>
              <div class="content">
                <p>Hi there!</p>
                <p>Welcome to Voytrail's newsletter community! You'll now receive exclusive tips, updates, and insights about the hospitality world.</p>
                <p>Stay tuned for:</p>
                <ul>
                  <li>Latest features and updates</li>
                  <li>Best practices for hostels and hotels</li>
                  <li>Industry insights and trends</li>
                  <li>Special offers and announcements</li>
                </ul>
                <a href="https://voytrail.com" class="button">Visit Voytrail</a>
              </div>
              <div class="footer">
                <p>You received this email because you subscribed to Voytrail newsletter.</p>
                <p>© 2025 Voytrail. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Also save to Resend Contacts via direct API call
    try {
      await fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: '',
          last_name: '',
          unsubscribed: false,
        }),
      });
    } catch (error) {
      console.warn('Contact save to Resend failed (non-critical):', error);
    }

    return new Response(JSON.stringify({ message: 'Successfully subscribed!', email }), { status: 200 });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
