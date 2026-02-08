export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: February 8, 2026</p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          <h3>1.1 Information You Provide</h3>
          <ul>
            <li>Email address (when you voluntarily subscribe to our mailing list)</li>
            <li>Region information (US or UK)</li>
            <li>Consent preferences for email communications</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <ul>
            <li>Basic website analytics (page views, referral sources) if you consent to cookies</li>
            <li>Email open tracking for subscribed users</li>
          </ul>

          <h3>1.3 Information We Do NOT Collect</h3>
          <ul>
            <li>Your Amazon purchase history or shopping data</li>
            <li>Credit card or payment information</li>
            <li>Precise location data</li>
            <li>Social media profiles or personal identifiers</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Send monthly impact reports (if you subscribe)</li>
            <li>Measure email engagement to improve our communications</li>
            <li>Analyze website traffic to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p><strong>We never sell, rent, or share your personal information with third parties.</strong></p>
          <p>Limited exceptions:</p>
          <ul>
            <li>Email service provider (Resend) - to deliver emails</li>
            <li>Analytics provider (Vercel Analytics) - anonymized data only, with consent</li>
            <li>Legal requirement - if compelled by law</li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>We use cookies only with your explicit consent. You can:</p>
          <ul>
            <li>Accept cookies for analytics</li>
            <li>Decline cookies and still use the site</li>
            <li>Change your cookie preferences anytime in your browser</li>
          </ul>

          <h2>5. Email Communications</h2>
          <ul>
            <li>Opt-in only - no pre-checked boxes</li>
            <li>Monthly impact reports only - no marketing emails</li>
            <li>Email opens are tracked for engagement metrics</li>
            <li>One-click unsubscribe in every email</li>
            <li>Unsubscribe requests processed within 24 hours</li>
          </ul>

          <h2>6. Your Rights (GDPR & CCPA)</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>To exercise these rights, email: privacy@pawsforgood.org</p>

          <h2>7. Data Security</h2>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>Encrypted data transmission (HTTPS)</li>
            <li>Secure data storage with access controls</li>
            <li>Regular security audits</li>
            <li>Minimal data collection principle</li>
          </ul>

          <h2>8. Children's Privacy</h2>
          <p>Our service is not directed to children under 13. We do not knowingly collect information from children.</p>

          <h2>9. Amazon Affiliate Disclosure</h2>
          <p>We participate in the Amazon Associates Program. When you click affiliate links, Amazon may set cookies. 
          Amazon's privacy policy governs their data collection. We do not receive personally identifiable information 
          from Amazon about your purchases.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this policy. Material changes will be communicated via email to subscribers and posted on this page 
          with an updated date.</p>

          <h2>11. Contact Us</h2>
          <p>Questions about this privacy policy?<br />
          Email: privacy@pawsforgood.org<br />
          We respond within 48 hours.</p>
        </div>
      </div>
    </div>
  );
}
