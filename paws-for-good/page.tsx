'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag, FileText } from 'lucide-react';
import EmailSignup from '@/components/EmailSignup';
import ProgressBar from '@/components/ProgressBar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [region, setRegion] = useState<'US' | 'UK'>('US');

  useEffect(() => {
    // Detect user region based on timezone or you can use an IP geolocation API
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('Europe/London') || timezone.includes('Europe')) {
      setRegion('UK');
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Shop Smart,
                <br />
                <span className="text-primary-600">Feed Paws</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Buy everyday products through our affiliate links and help feed street dogs and cats. 
                <strong className="text-primary-600"> At no extra cost to you.</strong>
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">How It Works</h3>
                    <p className="text-sm text-gray-600">
                      You shop → We earn commission → 100% goes to food → Animals get fed → You see the receipts
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/shop"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Start Shopping
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-semibold rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/dog-welcome.gif"
                  alt="Happy rescued dog"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2">Every purchase matters</p>
                  <p className="text-sm opacity-90">
                    See exactly where your impact goes with monthly reports
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Featured Campaign */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Current Campaign
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Help us reach our monthly goal to feed rescued street animals
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    🐾 February 2026 Campaign
                  </div>
                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
                    Street Dogs & Cats Food Support
                  </h3>
                  <p className="text-gray-700 mb-6">
                    <strong>Location:</strong> Mumbai, India
                    <br />
                    Supporting local animal rescue organizations with nutritious food for rescued street animals.
                  </p>
                  
                  <ProgressBar
                    current={847.50}
                    target={2000}
                    label="Monthly Progress"
                  />

                  <div className="mt-6 flex gap-4">
                    <Link
                      href="/campaign"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      View Campaign
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-colors"
                    >
                      Shop to Support
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/dog-welcome.gif"
                      alt="Campaign photo 1"
                      className="rounded-lg shadow-lg"
                    />
                    <img
                      src="/dog-welcome.gif"
                      alt="Campaign photo 2"
                      className="rounded-lg shadow-lg mt-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FileText className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Get Monthly Impact Reports
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See exactly how your purchases help. Receipts, photos, and transparent reporting. 
              No marketing emails, just impact.
            </p>
            
            <EmailSignup region={region} variant="hero" />

            <p className="mt-6 text-sm text-gray-500">
              We respect your privacy. Read our{' '}
              <Link href="/privacy-policy" className="text-primary-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">100% Transparent</h3>
              <p className="text-gray-600">
                Every cent accounted for. Receipts and photos shared monthly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">No Extra Cost</h3>
              <p className="text-gray-600">
                Same prices as Amazon. We just earn commission that helps animals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">No Donations Asked</h3>
              <p className="text-gray-600">
                Just shop normally. Your purchases naturally help feed rescued animals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
