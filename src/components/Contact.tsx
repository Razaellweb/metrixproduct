import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-2">Have questions? Send us a message and we'll get back to you shortly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            className="space-y-4 p-6 rounded-xl border border-border bg-card"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="jane@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us a bit about what you need..."
                required
              />
            </div>
            <div className="pt-2">
              <Button type="submit" variant="neural" className="rounded-full">Send message</Button>
            </div>
          </form>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <div className="text-foreground font-medium">Email</div>
                <a className="hover:text-foreground" href="mailto:hello@contextengine.com">hello@contextengine.com</a>
              </div>
              <div>
                <div className="text-foreground font-medium">Sales</div>
                <a className="hover:text-foreground" href="mailto:sales@contextengine.com">sales@contextengine.com</a>
              </div>
              <div>
                <div className="text-foreground font-medium">Support</div>
                <a className="hover:text-foreground" href="mailto:support@contextengine.com">support@contextengine.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
