'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products, categories, getProductsByCategory } from '@/lib/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [region, setRegion] = useState<'US' | 'UK'>('US');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Detect user region
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('Europe/London') || timezone.includes('Europe')) {
      setRegion('UK');
    }
  }, []);

  useEffect(() => {
    setFilteredProducts(getProductsByCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shop & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Every purchase through these links earns commission that feeds rescued animals.
            Same Amazon prices, zero extra cost to you.
          </p>
          <div className="inline-block bg-accent-100 text-accent-800 px-4 py-2 rounded-lg text-sm font-medium">
            Shopping from: <strong>{region === 'US' ? 'United States' : 'United Kingdom'}</strong>
          </div>
        </motion.div>

        {/* Affiliate Disclosure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded"
        >
          <p className="text-sm text-blue-800">
            <strong>Affiliate Disclosure:</strong> We participate in the Amazon Associates Program. 
            When you purchase through our links, we earn a commission at no extra cost to you. 
            100% of commissions support our mission to feed street dogs and cats.{' '}
            <a href="/affiliate-disclosure" className="underline font-semibold">
              Learn more
            </a>
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} region={region} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Visit Amazon directly and share your affiliate link with friends and family. 
            Any purchase made through your shared link helps feed rescued animals!
          </p>
          <a
            href={region === 'US' 
              ? 'https://www.amazon.com/?tag=pawsforgood-20' 
              : 'https://www.amazon.co.uk/?tag=pawsforgood-21'
            }
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Go to Amazon
          </a>
        </motion.div>
      </div>
    </div>
  );
}
