import React from 'react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section id="cta" className="relative w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="neural-glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to meter, price, and bill?</h3>
            <p className="text-muted-foreground">Start free. Bring your Stripe account. Ship usage‑based in days.</p>
          </div>
          <div className="flex gap-3">
            <a href="/signup">
              <Button variant="neural" data-event-name="cta_bottom_get_started">get started free</Button>
            </a>
            <a href="#how">
              <Button variant="outline">See how it works</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
