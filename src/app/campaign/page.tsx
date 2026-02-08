'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Target } from 'lucide-react';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';

export default function Campaign() {
  const updates = [
    {
      date: 'February 5, 2026',
      content: 'Purchased 25kg of premium dry food and distributed to 3 rescue centers in Mumbai.',
    },
    {
      date: 'January 28, 2026',
      content: 'Reached $750 milestone! Thank you to everyone who shopped through our links.',
    },
    {
      date: 'January 15, 2026',
      content: 'Campaign launched! Starting with a goal to feed 100+ rescued animals monthly.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🐾 Active Campaign
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Street Dogs & Cats Food Support
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              <span>February 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-600" />
              <span>$2,000 Monthly Goal</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Campaign Progress
            </h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 mb-6">
              <ProgressBar current={847.50} target={2000} />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">$847.50</div>
                  <div className="text-sm text-gray-600">Raised This Month</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-600">~85 kg</div>
                  <div className="text-sm text-gray-600">Food Purchased</div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              This campaign supports local animal rescue organizations in Mumbai who care for 
              street dogs and cats. 100% of affiliate commissions from your purchases go 
              directly toward purchasing nutritious food.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Shop to Support This Campaign
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Campaign Photos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/dog-welcome.gif"
                    alt={`Campaign photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Photos show food purchases, distribution to rescue centers, and happy rescued animals.
              New photos added as campaign progresses.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Recent Updates
          </h2>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div
                key={index}
                className="border-l-4 border-primary-600 pl-6 py-2"
              >
                <div className="text-sm font-semibold text-primary-600 mb-1">
                  {update.date}
                </div>
                <p className="text-gray-700">{update.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
