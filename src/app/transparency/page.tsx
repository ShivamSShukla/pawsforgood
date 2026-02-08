'use client';

import { motion } from 'framer-motion';
import { Shield, DollarSign, FileText, Lock, Eye, Mail } from 'lucide-react';

export default function Transparency() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-5xl font-bold text-gray-900 mb-6">Transparency</h1>
          <p className="text-xl text-gray-600 mb-12">
            Trust is earned through complete transparency. Here's exactly how we operate.
          </p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">How Commissions Work</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <ul>
                <li>We earn 1-10% commission on qualifying Amazon purchases made through our affiliate links</li>
                <li>Commission rates vary by product category (set by Amazon, not us)</li>
                <li>Commissions are paid by Amazon 60 days after purchase</li>
                <li>100% of received commissions are pooled weekly/biweekly for food purchases</li>
                <li>We never keep any portion for operational costs</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Reporting Schedule</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <ul>
                <li><strong>Monthly Reports:</strong> Sent first week of each month to all subscribers</li>
                <li><strong>Contents:</strong> Total commissions earned, food purchased (kg), receipts, distribution photos</li>
                <li><strong>Format:</strong> Email with links to downloadable PDFs and image galleries</li>
                <li><strong>Archive:</strong> All past reports available on the Impact Reports page</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Proof We Share</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <ul>
                <li><strong>Purchase Receipts:</strong> Scanned/photographed receipts from food suppliers showing date, items, and amounts</li>
                <li><strong>Distribution Photos:</strong> Photos of food delivery to rescue organizations (faces blurred for privacy)</li>
                <li><strong>Partner Confirmations:</strong> Signed confirmations from rescue organizations receiving food</li>
                <li><strong>Commission Screenshots:</strong> Redacted Amazon Associates dashboard showing monthly earnings</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Privacy Protection</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <ul>
                <li>We NEVER know what you purchase or see your Amazon account details</li>
                <li>Amazon handles all transactions; we only receive anonymized commission data</li>
                <li>Email addresses are stored securely and never shared with third parties</li>
                <li>No browsing data is collected beyond basic analytics (with consent)</li>
                <li>You can request data deletion anytime by emailing us</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Email Open Tracking</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <p>
                <strong>We track email opens.</strong> Here's why and how:
              </p>
              <ul>
                <li><strong>Purpose:</strong> Understand engagement to improve our impact reports</li>
                <li><strong>Method:</strong> Standard email tracking pixel (1x1 transparent image)</li>
                <li><strong>Data Collected:</strong> Only whether email was opened and approximate time</li>
                <li><strong>Not Collected:</strong> Your location, device type, or IP address</li>
                <li><strong>Usage:</strong> Internal metrics only, never shared or sold</li>
                <li><strong>Opt-Out:</strong> Block images in your email client to prevent tracking</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-primary-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Email Commitment</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <ul>
                <li><strong>Monthly Only:</strong> You receive exactly one email per month (the impact report)</li>
                <li><strong>No Marketing:</strong> We never send promotional emails, special offers, or partner advertisements</li>
                <li><strong>No Sharing:</strong> Your email is never sold, rented, or shared with anyone</li>
                <li><strong>Easy Unsubscribe:</strong> One-click unsubscribe link in every email footer</li>
                <li><strong>Immediate Removal:</strong> Unsubscribe requests processed within 24 hours</li>
              </ul>
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 border-l-4 border-primary-600 p-6 rounded"
        >
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Questions About Our Transparency?</h3>
          <p className="text-gray-700">
            If you have any questions about how we operate, email us at{' '}
            <a href="mailto:transparency@pawsforgood.org" className="text-primary-600 hover:underline font-medium">
              transparency@pawsforgood.org
            </a>
            . We respond to all inquiries within 48 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
