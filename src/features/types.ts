export type Role = "Developer" | "Product Manager" | "Finance Team";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  apiKey?: string;
  locale: Locale;
}

export type Locale = "en" | "es" | "fr";

export interface PricingTier {
  id: string;
  name: string;
  currency: "USD" | "EUR";
  basePrice: number; // monthly base price
  includedUnits: number;
  overagePrice: number; // per unit overage
  features: string[];
}

export interface Invoice {
  id: string;
  customer: string;
  amount: number;
  currency: "USD" | "EUR";
  period: string; // e.g., 2025-09
  status: "paid" | "open" | "failed";
  url?: string;
}

export interface RevenuePoint {
  date: string; // ISO
  mrr: number;
  usageRevenue: number;
  leakage: number; // dollars lost estimate
}

export interface UsagePoint {
  date: string;
  events: number;
  latencyMs: number;
  entitlementMs: number;
}
