import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Server, Database, Gauge, Boxes } from 'lucide-react';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="infrastructure-card p-6 rounded-2xl h-full">{children}</div>
);

const Integrations = () => {
  const items = [
    { icon: <CreditCard className="w-6 h-6 text-primary" />, name: 'Stripe', desc: 'Subscriptions, invoices, payments.' },
    { icon: <Server className="w-6 h-6 text-secondary" />, name: 'Redis', desc: 'Edge cache for entitlements.' },
    { icon: <Database className="w-6 h-6 text-accent" />, name: 'PostgreSQL', desc: 'Durable storage for usage.' },
    { icon: <Gauge className="w-6 h-6 text-primary" />, name: 'Kafka', desc: 'Streaming ingestion at scale.' },
    { icon: <Boxes className="w-6 h-6 text-secondary" />, name: 'Next.js', desc: 'Starter templates and hooks.' },
  ];

  return (
    <section id="integrations" className="relative w-full py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">Integrations</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">Connect your stack in minutes</h2>
          <p className="text-lg text-muted-foreground">Production‑ready integrations for billing, data, cache, and frontend.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it) => (
            <Card key={it.name}>
              <div className="flex items-start gap-3">
                <div className="micro-accent p-2 rounded-lg">{it.icon}</div>
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
