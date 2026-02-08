/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_SITE_NAME: string;
    RESEND_API_KEY: string;
    NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_US: string;
    NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_UK: string;
    NEXT_PUBLIC_CONTACT_EMAIL: string;
    NEXT_PUBLIC_GA_ID?: string;
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};
