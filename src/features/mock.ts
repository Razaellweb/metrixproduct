import { Invoice, PricingTier, RevenuePoint, UsagePoint } from "./types";

function rand(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min; }

export const MOCK_DATA = (import.meta as any).env?.VITE_MOCK_DATA !== "false";

export const defaultTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    currency: "USD",
    basePrice: 0,
    includedUnits: 100000,
    overagePrice: 0.0005,
    features: ["Basic metering", "1 project", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    currency: "USD",
    basePrice: 199,
    includedUnits: 2000000,
    overagePrice: 0.00025,
    features: ["Entitlements", "Hybrid pricing", "Priority support"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    currency: "USD",
    basePrice: 999,
    includedUnits: 10000000,
    overagePrice: 0.0001,
    features: ["Dedicated support", "Custom integrations", "SLA"],
  },
];

export const invoices: Invoice[] = Array.from({ length: 18 }).map((_, i) => {
  const month = (i % 12) + 1;
  const year = 2024 + Math.floor(i / 12);
  const amount = rand(2000, 25000);
  return {
    id: `inv_${year}${String(month).padStart(2, "0")}_${rand(1000, 9999)}`,
    customer: ["Acme AI", "Vector Labs", "DataForge", "NeuroNet"][i % 4],
    amount,
    currency: i % 3 === 0 ? "EUR" : "USD",
    period: `${year}-${String(month).padStart(2, "0")}`,
    status: amount % 7 === 0 ? "failed" : amount % 5 === 0 ? "open" : "paid",
    url: "#",
  };
});

export const revenueSeries: RevenuePoint[] = Array.from({ length: 24 }).map((_, i) => {
  const base = 10000 + i * 1200;
  const usage = 4000 + Math.sin(i / 2) * 1800 + rand(-800, 800);
  const leakage = Math.max(0, rand(50, 400) - (i > 12 ? 100 : 0));
  const date = new Date(2023, i, 1).toISOString();
  return { date, mrr: base, usageRevenue: Math.max(0, usage), leakage };
});

export const usageSeries: UsagePoint[] = Array.from({ length: 30 }).map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    date: date.toISOString(),
    events: rand(40000, 190000),
    latencyMs: rand(45, 95),
    entitlementMs: rand(12, 40),
  };
});
