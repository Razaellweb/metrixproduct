
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Context Engine cut our incident triage time in half. Engineers paste a query and get the exact code or doc snippet with a source link.",
      author: "Priya Desai",
      position: "Director of Platform Engineering, Latticewave",
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "Security was the blocker for every vendor we evaluated. SSO, RBAC, and audit trails made our InfoSec review painless.",
      author: "Marcus Lee",
      position: "Head of Security Engineering, Quantia",
      avatarUrl: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      quote: "Our assistant integrates via the API and pulls context under 150ms P95. Adoption spiked the week we shipped it.",
      author: "Jenna Alvarez",
      position: "Lead AI Engineer, StackForge",
      avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by engineering teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for security‑first organizations with large code and doc surfaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatarUrl} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
