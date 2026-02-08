export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  amazonUrlUS: string;
  amazonUrlUK: string;
  description: string;
  trending?: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  location: string;
  monthlyTarget: number;
  currentAmount: number;
  description: string;
  updates: CampaignUpdate[];
  photos: string[];
}

export interface CampaignUpdate {
  id: string;
  date: string;
  content: string;
}

export interface ImpactReport {
  id: string;
  month: string;
  year: number;
  totalCommission: number;
  foodPurchased: number;
  receipts: string[];
  photos: string[];
  description: string;
}

export interface EmailSubscriber {
  email: string;
  subscribedAt: string;
  region: 'US' | 'UK';
  consentGiven: boolean;
}

export type Region = 'US' | 'UK';
