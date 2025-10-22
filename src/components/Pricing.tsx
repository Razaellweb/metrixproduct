
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      description: "Launch fast with a generous free tier",
      features: [
        "100k metered events/mo",
        "1 pricing plan",
        "Stripe integration",
        "Community support"
      ],
      usage: "overage: $0.30 / 1k events",
      buttonText: "Get started free",
      buttonHref: "/signup",
      popular: false
    },
    {
      name: "Growth",
      price: "$299",
      period: "/mo",
      description: "Scale usage-based plans with confidence",
      features: [
        "10M events/mo included",
        "Unlimited pricing rules",
        "Entitlements API (<50ms)",
        "Threshold alerts + webhooks",
        "Email & chat support"
      ],
      usage: "overage: $0.18 / 1k events",
      buttonText: "Start 14‑day trial",
      buttonHref: "/signup",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Security, scale, and deployment flexibility",
      features: [
        "SSO/RBAC & audit logs",
        "Multi‑currency + VAT/GST",
        "Dedicated infra & SLA",
        "Private cloud or on‑prem",
        "Solutions engineer"
      ],
      usage: "tier‑based pricing",
      buttonText: "Contact sales",
      buttonHref: "#cta",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Simple subscription + usage
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Scale with usage‑based fees. Fair and predictable pricing as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 bg-card" 
                  : "border-border bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price} <span className="text-base font-normal text-muted-foreground">{plan.period}</span></div>
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">{plan.usage}</div>
              </div>
              
              <div className="mt-6">
                <a href={plan.buttonHref}>
                  <Button 
                    className={"w-full"}
                    variant={plan.popular ? "default" : "outline"}
                    data-event-name={`cta_pricing_${plan.name.toLowerCase()}`}
                  >
                    {plan.buttonText}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground text-sm">
          Prices in USD unless noted. Taxes may apply. Usage billed monthly.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
