import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, region, consent } = body;

    // Validation
    if (!email || !region || !consent) {
      return NextResponse.json(
        { error: 'Email, region, and consent are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate region
    if (region !== 'US' && region !== 'UK') {
      return NextResponse.json(
        { error: 'Region must be US or UK' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Store the subscriber in a database
    // 2. Send a confirmation email with unsubscribe link
    // 3. Handle double opt-in if required by law
    
    // For this demo, we'll just send the welcome email
    const result = await sendWelcomeEmail(email);

    if (!result.success) {
      console.error('Failed to send welcome email:', result.error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again.' },
        { status: 500 }
      );
    }

    // Log the subscription (in production, save to database)
    console.log('New subscriber:', {
      email,
      region,
      consent,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
    });

  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
