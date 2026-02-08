import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'pet-food-1',
    title: 'Premium Dry Dog Food',
    category: 'Pet Supplies',
    price: 49.99,
    image: 'https://m.media-amazon.com/images/I/81qY7Y7Y7YL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00GOLD',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00GOLD',
    description: 'High-quality nutrition for your furry friend',
    trending: true,
  },
  {
    id: 'home-1',
    title: 'Stainless Steel Water Bottle',
    category: 'Home & Kitchen',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/71Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00WATER',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00WATER',
    description: 'Eco-friendly and durable water bottle',
    trending: true,
  },
  {
    id: 'electronics-1',
    title: 'Wireless Earbuds',
    category: 'Electronics',
    price: 79.99,
    image: 'https://m.media-amazon.com/images/I/61Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00AUDIO',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00AUDIO',
    description: 'Crystal clear sound with noise cancellation',
    trending: true,
  },
  {
    id: 'health-1',
    title: 'Yoga Mat & Accessories',
    category: 'Health & Fitness',
    price: 34.99,
    image: 'https://m.media-amazon.com/images/I/71Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00YOGA',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00YOGA',
    description: 'Non-slip yoga mat with carrying strap',
  },
  {
    id: 'beauty-1',
    title: 'Organic Skincare Set',
    category: 'Beauty & Personal Care',
    price: 44.99,
    image: 'https://m.media-amazon.com/images/I/81Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00SKIN',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00SKIN',
    description: 'Natural ingredients for healthy skin',
  },
  {
    id: 'books-1',
    title: 'Bestselling Fiction Novel',
    category: 'Books',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/91Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00BOOK',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00BOOK',
    description: 'Engaging story that captivates readers',
  },
  {
    id: 'home-2',
    title: 'LED Desk Lamp',
    category: 'Home & Kitchen',
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/71Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00LAMP',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00LAMP',
    description: 'Adjustable brightness for perfect lighting',
    trending: true,
  },
  {
    id: 'pet-2',
    title: 'Interactive Cat Toy',
    category: 'Pet Supplies',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/81Y7Y7Y7YYL._AC_SL1500_.jpg',
    amazonUrlUS: 'https://www.amazon.com/dp/B00CATTOY',
    amazonUrlUK: 'https://www.amazon.co.uk/dp/B00CATTOY',
    description: 'Keeps your cat entertained for hours',
  },
];

export const categories = [
  'All Products',
  'Pet Supplies',
  'Home & Kitchen',
  'Electronics',
  'Health & Fitness',
  'Beauty & Personal Care',
  'Books',
];

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All Products') {
    return products;
  }
  return products.filter(p => p.category === category);
}

export function getTrendingProducts(): Product[] {
  return products.filter(p => p.trending);
}

export function getProductLink(product: Product, region: 'US' | 'UK'): string {
  const tag = region === 'US' 
    ? process.env.AMAZON_ASSOCIATE_TAG_US || 'pawsforgood-20'
    : process.env.AMAZON_ASSOCIATE_TAG_UK || 'pawsforgood-21';
  
  const baseUrl = region === 'US' ? product.amazonUrlUS : product.amazonUrlUK;
  return `${baseUrl}?tag=${tag}`;
}
