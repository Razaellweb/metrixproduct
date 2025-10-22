import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, ShieldCheck, Gauge, CreditCard, ServerCog, Zap, Coins } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const valueBullets = [
    'Real-time metering APIs',
    'Dynamic pricing & plan updates',
    'Stripe billing with tax support',
    'Fast entitlement checks (<50ms)',
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-15" />
      <div className="absolute inset-0 animated-grid opacity-10" />

      <div className="absolute top-20 left-16 w-28 h-28 neural-gradient rounded-full opacity-15 blur-2xl" />
      <div className="absolute bottom-24 right-16 w-36 h-36 neural-gradient-secondary rounded-full opacity-15 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm border-primary/30 bg-primary/5 text-primary"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              SOC 2 In-Progress • GDPR-Ready • PCI via Stripe
            </Badge>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
              Power Your Growth With
              <span className="block neural-gradient bg-clip-text text-transparent">
                Precision Billing
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Metrix helps SaaS, AI, and API platforms meter usage, price dynamically, and bill through Stripe — all in real time.
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              SDKs for Node.js & Python. Multi-currency, VAT, and automated payment recovery built in.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="/signup">
              <Button
                size="lg"
                variant="neural"
                className="px-8 py-4 text-lg h-auto rounded-full group"
                data-event-name="cta_hero_get_started"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#how">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5 px-8 py-4 text-lg h-auto rounded-full group"
              >
                <Play className="mr-2 w-5 h-5" />
                See How It Works
              </Button>
            </a>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-3xl mx-auto text-sm text-muted-foreground">
            {valueBullets.map((v, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Preview */}
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="neural-glass rounded-2xl overflow-hidden">
            <div className="bg-card/80 border-b border-primary/15 p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 neural-gradient rounded-lg flex items-center justify-center text-background">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Metrix Console</h3>
                  <p className="text-sm text-muted-foreground">Metering • Pricing • Billing</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                  Multi-Currency
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  Idempotent Events
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  <span aria-hidden>~</span>50ms Checks
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[420px]">
              {/* Left: Metered Events */}
              <div className="p-6 border-r border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Metered Events</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'tokens.generated', status: 'accepted' },
                    { name: 'api.requests', status: 'accepted' },
                    { name: 'seats.active', status: 'queued' },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="infrastructure-card p-3 rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                          <span className="text-[10px] font-mono">{i + 1}</span>
                        </div>
                        <span className="text-sm">{c.name}</span>
                      </div>
                      <Badge
                        variant={c.status === 'accepted' ? 'secondary' : 'outline'}
                        className={
                          c.status === 'accepted'
                            ? 'bg-secondary/20 text-secondary'
                            : ''
                        }
                      >
                        {c.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-xs text-muted-foreground mb-2">Alerts</div>
                  <div className="infrastructure-card p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ServerCog className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Threshold: api.requests {'>'} 1M</span>
                    </div>
                    <Badge variant="outline">Email + Webhook</Badge>
                  </div>
                </div>
              </div>

              {/* Center: Pricing */}
              <div className="p-6 border-r border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Coins className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Pricing</span>
                </div>

                <div className="infrastructure-card p-3 rounded-lg mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Rule</span>
                    <span className="px-2 py-1 rounded bg-muted text-sm">
                      Tiered tokens.generated
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: '0–1M Tokens', price: '$0.20 / 1k' },
                    { title: '1M–10M Tokens', price: '$0.16 / 1k' },
                    { title: '10M+ Tokens', price: 'Custom' },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="infrastructure-card p-3 rounded-lg flex items-center justify-between"
                    >
                      <div className="text-sm font-medium">{r.title}</div>
                      <Badge variant="outline">{r.price}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Billing */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Billing</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Invoices This Month', value: '1,204' },
                    { label: 'Recovered Payments', value: '92%' },
                    { label: 'Active Currencies', value: 'USD • EUR • GBP' },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="infrastructure-card p-3 rounded-lg flex items-center justify-between"
                    >
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <span className="text-sm font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  SDKs: Node.js • Python • REST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
