'use client';

import { Product } from '@/types';
import { getProductLink } from '@/lib/products';
import { trackAffiliateClick } from '@/lib/analytics';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  region: 'US' | 'UK';
}

export default function ProductCard({ product, region }: ProductCardProps) {
  const handleClick = () => {
    trackAffiliateClick(product.id, region);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.trending && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            🔥 Trending
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          
          <a
            href={getProductLink(product, region)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Buy Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <p className="mt-3 text-xs text-gray-500">
          Affiliate link • Commission helps feed rescued animals
        </p>
      </div>
    </div>
  );
}
