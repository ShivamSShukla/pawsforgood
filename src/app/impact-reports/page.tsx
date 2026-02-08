'use client';

import { motion } from 'framer-motion';
import { Download, Calendar, DollarSign, Package } from 'lucide-react';

export default function ImpactReports() {
  const reports = [
    {
      month: 'January',
      year: 2026,
      commission: 654.25,
      foodKg: 65,
      receipts: 2,
      photos: 8,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-5xl font-bold text-gray-900 mb-6">Impact Reports</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Complete transparency. Every report shows exactly how affiliate commissions were used to feed rescued animals.
          </p>
        </motion.div>

        <div className="space-y-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    {report.month} {report.year}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Monthly Impact Report
                  </h2>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-primary-600 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-semibold">Total Commission</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${report.commission.toFixed(2)}
                  </div>
                </div>

                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-accent-600 mb-2">
                    <Package className="w-5 h-5" />
                    <span className="font-semibold">Food Purchased</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {report.foodKg} kg
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="font-semibold text-gray-700 mb-2">Documentation</div>
                  <div className="text-sm text-gray-600">
                    {report.receipts} Receipts<br />
                    {report.photos} Photos
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Report Summary</h3>
                <p className="text-gray-700 mb-4">
                  In {report.month} {report.year}, we earned ${report.commission.toFixed(2)} in affiliate commissions. 
                  This was used to purchase {report.foodKg} kg of nutritious food for rescued street dogs and cats 
                  in Mumbai. Food was distributed to 3 partner rescue organizations.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src="/dog-welcome.gif"
                        alt={`Report photo ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="font-display text-3xl font-bold mb-4">Get Future Reports</h2>
          <p className="text-lg mb-6">
            Subscribe to receive detailed impact reports directly in your inbox every month.
          </p>
          <a
            href="/#signup"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Subscribe Now
          </a>
        </motion.div>
      </div>
    </div>
  );
}
