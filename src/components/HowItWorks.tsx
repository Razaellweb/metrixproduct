import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code2, PlugZap, Settings2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: PlugZap,
      title: '1. Instrument events',
      description: 'Send idempotent usage events with our SDKs or HTTP API.',
      code: `// Node.js
import { metrix } from '@metrix/sdk';
await metrix.track({
  idempotencyKey: crypto.randomUUID(),
  event: 'tokens.generated',
  quantity: 1024,
  customerId: 'cus_123',
});`
    },
    {
      icon: Settings2,
      title: '2. Define pricing & entitlements',
      description: 'Create tiered rules and feature gates in the console.',
      code: `# Python
from metrix import client
cli = client(api_key='sk_...')
cli.pricing.create_tiered(
  metric='tokens.generated',
  tiers=[(0, 1_000_000, 0.20), (1_000_000, 10_000_000, 0.16)]
)`
    },
    {
      icon: Code2,
      title: '3. Bill with Stripe',
      description: 'Sync subscriptions and invoices, recover failed payments.',
      code: `// Webhook handler (pseudo)
app.post('/webhooks/stripe', async (req) => {
  const evt = parseStripe(req)
  if (evt.type === 'invoice.payment_failed') {
    await metrix.retryPayment(evt.data.id)
  }
})`
    },
  ];

  return (
    <section id="how" className="relative w-full py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">How it works</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">From metering to money in minutes</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to launch usage‑based plans across products and regions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="infrastructure-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
              <pre className="code-block text-xs overflow-x-auto"><code>{s.code}</code></pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
