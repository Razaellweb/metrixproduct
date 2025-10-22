import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Gauge,
  Coins,
  ShieldCheck,
  KeyRound,
  Cpu,
  ServerCog,
  CheckCircle,
} from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: Gauge,
      title: "Real-time metering",
      description: "Idempotent event ingestion with exactly-once semantics and low overhead.",
      details: [
        "HTTP + SDK event APIs",
        "Event de-duplication",
        "Kafka-ready streaming",
        "Usage exports"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Coins,
      title: "Dynamic pricing engine",
      description: "Tiered, volume, and per-seat pricing with proration and migrations.",
      details: [
        "Per-unit & tiered rules",
        "Plan migration + proration",
        "Threshold alerts",
        "Coupons & credits"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10", 
      borderColor: "border-secondary/30"
    },
    {
      icon: ShieldCheck,
      title: "Entitlements & access",
      description: "<50ms cached entitlement checks for features, limits, and flags.",
      details: [
        "Feature gating",
        "Limit enforcement",
        "Org & user scopes",
        "Audit logs"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
    {
      icon: KeyRound,
      title: "Stripe-powered billing",
      description: "Subscriptions, invoices, and payment retries with hosted checkout.",
      details: [
        "Multi-currency",
        "Tax basics (VAT/GST)",
        "Dunning & webhooks",
        "Customer portal"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Cpu,
      title: "Developer-first SDKs",
      description: "Node.js & Python with typed clients and test helpers.",
      details: [
        "Local sandbox",
        "CLI utilities",
        "Idempotency helpers",
        "GraphQL + REST"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: ServerCog,
      title: "Dashboards & alerts",
      description: "Real-time usage, billing health, retries, and threshold notifications.",
      details: [
        "Usage analytics",
        "Retry insights",
        "Alert webhooks",
        "Exports & BI"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    }
  ];

  const stats = [
    { label: "Event throughput", value: "200k+/s", subtext: "horizontally scalable" },
    { label: "Entitlement P95", value: "<50ms", subtext: "edge cached" },
    { label: "Currencies", value: "30+", subtext: "Stripe supported" },
    { label: "SDK installs", value: "10k+", subtext: "npm & PyPI" }
  ];
  
  return (
    <section id="features" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 neural-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">
            Built for modern SaaS
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance">
            Meter, price, entitle, and bill—without the glue code
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Metrix unifies metering, pricing, entitlements, and billing so you can launch usage-based plans fast and scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground/70">{stat.subtext}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`infrastructure-card p-8 rounded-2xl group cursor-pointer transition-all duration-300 ${
                hoveredFeature === index 
                  ? `${feature.borderColor} ${feature.bgColor}` 
                  : 'border-border/50 hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`space-y-2 transition-all duration-200 ${
                  hoveredFeature === index ? 'opacity-100 max-h-40' : 'opacity-80 max-h-0 overflow-hidden'
                }`}>
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className={`pt-2 transition-all duration-200 ${
                  hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button className={`flex items-center space-x-1 text-sm font-medium ${feature.color} hover:underline group`}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;