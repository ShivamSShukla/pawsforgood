'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, DollarSign, ShoppingBag, FileCheck, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'You Shop Through Our Links',
      description: 'Browse curated products from Amazon. Click on any product to buy through our affiliate link. Prices are the same as buying directly on Amazon.',
    },
    {
      icon: DollarSign,
      title: 'We Earn Commission',
      description: 'When you complete a purchase, Amazon pays us a small commission (typically 1-10% of product price). This costs you nothing extra.',
    },
    {
      icon: ShoppingBag,
      title: 'Food is Purchased',
      description: '100% of commissions are pooled weekly/biweekly. We purchase high-quality food from verified suppliers for rescued street dogs and cats.',
    },
    {
      icon: FileCheck,
      title: 'Receipts & Photos Shared',
      description: 'Every purchase receipt and distribution photo is shared in monthly impact reports. Complete transparency, no exceptions.',
    },
    {
      icon: Heart,
      title: 'Animals Get Fed',
      description: 'Food is distributed to partner rescue organizations who care for street animals. Your shopping helps save lives.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and effective. Your everyday purchases help feed rescued animals.
          </p>
        </motion.div>

        <div className="space-y-16 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-sm font-semibold text-primary-600 mb-2">
                  Step {index + 1}
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <step.icon className="w-32 h-32 text-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Important Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Pooling System</h3>
              <p className="text-sm">
                Commissions are collected and pooled weekly or biweekly before purchasing food. 
                This allows us to buy in bulk at better prices, maximizing impact.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Monthly Reports</h3>
              <p className="text-sm">
                Subscribers receive detailed monthly reports showing total commissions, 
                food purchased (with receipts), and distribution photos.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Your Privacy</h3>
              <p className="text-sm">
                We never know what you purchase or collect personal data. Amazon handles all transactions. 
                We only track email signups with explicit consent.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">No Donations</h3>
              <p className="text-sm">
                We don't accept direct donations. This keeps our model simple, transparent, 
                and ensures all impact comes from genuine shopping activity.
              </p>
            </div>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Start Shopping Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
