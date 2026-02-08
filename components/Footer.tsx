'use client';

import Link from 'next/link';
import { Heart, Mail, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-white mb-4">
              <Heart className="w-6 h-6 fill-current text-primary-500" />
              <span>Paws For Good</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Helping street dogs and cats, one purchase at a time. 
              100% of affiliate commissions go toward purchasing food for rescued animals.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:support@pawsforgood.org" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="text-sm hover:text-white transition-colors">
                  Campaign
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm hover:text-white transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/impact-reports" className="text-sm hover:text-white transition-colors">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-sm hover:text-white transition-colors">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Paws For Good. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ for rescued animals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
