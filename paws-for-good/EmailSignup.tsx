'use client';

import { useState } from 'react';
import { trackEmailSignup } from '@/lib/analytics';

interface EmailSignupProps {
  region: 'US' | 'UK';
  variant?: 'default' | 'hero' | 'footer';
}

export default function EmailSignup({ region, variant = 'default' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setStatus('error');
      setMessage('Please confirm your consent to receive emails.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, region, consent }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Check your email for confirmation.');
        setEmail('');
        setConsent(false);
        trackEmailSignup(region);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Get Monthly Impact Reports
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            See exactly how your purchases help feed rescued animals. Unsubscribe anytime.
          </p>
          
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span>
                I consent to receive monthly impact reports by email. I understand:
                <ul className="mt-1 ml-4 list-disc text-xs text-gray-600">
                  <li>Emails will only contain impact reports (no marketing)</li>
                  <li>Email opens are tracked for engagement metrics</li>
                  <li>My data will never be shared with third parties</li>
                  <li>I can unsubscribe anytime</li>
                </ul>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>

          {status !== 'idle' && (
            <p className={`mt-3 text-sm ${status === 'success' ? 'text-accent-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        
        <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-0.5 w-3 h-3 text-primary-600 border-gray-300 rounded"
          />
          <span>
            I consent to monthly impact reports. Email opens tracked. Never shared. Unsubscribe anytime.
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

        {status !== 'idle' && (
          <p className={`text-sm ${status === 'success' ? 'text-accent-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
