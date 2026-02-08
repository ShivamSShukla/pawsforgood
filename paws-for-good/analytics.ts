export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  
  // Only track if user has consented to cookies
  const cookieConsent = localStorage.getItem('cookie-consent');
  if (cookieConsent !== 'accepted') return;

  // Google Analytics
  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('event', eventName, properties);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  
  const cookieConsent = localStorage.getItem('cookie-consent');
  if (cookieConsent !== 'accepted') return;

  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const trackAffiliateClick = (productId: string, region: string) => {
  trackEvent('affiliate_click', {
    product_id: productId,
    region: region,
  });
};

export const trackEmailSignup = (region: string) => {
  trackEvent('email_signup', {
    region: region,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
