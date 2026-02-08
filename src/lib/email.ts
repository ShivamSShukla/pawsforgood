import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Paws For Good <noreply@pawsforgood.org>',
      to: [email],
      subject: 'Welcome to Paws For Good! 🐾',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ef6820; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .button { display: inline-block; background: #22c55e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🐾 Thank You for Joining Us!</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thank you for subscribing to Paws For Good monthly impact reports!</p>
                <p>You'll now receive monthly updates about:</p>
                <ul>
                  <li>Total commissions earned from affiliate purchases</li>
                  <li>Amount of food purchased for street dogs and cats</li>
                  <li>Photos and receipts of food distribution</li>
                  <li>Campaign progress and impact stories</li>
                </ul>
                <p>Your shopping choices make a real difference. Every purchase through our affiliate links helps feed rescued animals.</p>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/shop" class="button">Start Shopping</a>
                <p><strong>Important Privacy Note:</strong></p>
                <p>We track email opens to understand engagement. Your data is never shared with third parties. You can unsubscribe anytime.</p>
              </div>
              <div class="footer">
                <p>Paws For Good • Helping street dogs and cats, one purchase at a time</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy">Privacy Policy</a> • <a href="%unsubscribe_url%">Unsubscribe</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendWelcomeEmail:', error);
    return { success: false, error };
  }
}

export async function sendImpactReport(
  email: string,
  reportData: {
    month: string;
    year: number;
    totalCommission: number;
    foodPurchased: number;
  }
) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Paws For Good <noreply@pawsforgood.org>',
      to: [email],
      subject: `${reportData.month} ${reportData.year} Impact Report - Thank You! 🐾`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ef6820; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .stat { background: white; padding: 20px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #22c55e; }
              .button { display: inline-block; background: #22c55e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🐾 ${reportData.month} ${reportData.year} Impact Report</h1>
              </div>
              <div class="content">
                <p>Dear Supporter,</p>
                <p>Thank you for being part of Paws For Good! Here's what we accomplished together this month:</p>
                
                <div class="stat">
                  <h3>💰 Total Commission Earned</h3>
                  <p><strong>$${reportData.totalCommission.toFixed(2)}</strong></p>
                </div>
                
                <div class="stat">
                  <h3>🍖 Food Purchased</h3>
                  <p><strong>${reportData.foodPurchased} kg of nutritious food</strong></p>
                </div>
                
                <p>100% of affiliate commissions were used to purchase food for street dogs and cats. Full receipts and photos are available on our transparency page.</p>
                
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/impact-reports" class="button">View Full Report</a>
                
                <p>Every purchase you make through our links directly helps feed rescued animals. Thank you for your continued support!</p>
              </div>
              <div class="footer">
                <p>Paws For Good • Helping street dogs and cats, one purchase at a time</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/transparency">Transparency</a> • <a href="${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy">Privacy Policy</a> • <a href="%unsubscribe_url%">Unsubscribe</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending impact report:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendImpactReport:', error);
    return { success: false, error };
  }
}
