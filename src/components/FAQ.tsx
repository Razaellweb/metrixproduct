import React from 'react';

const faqs = [
  {
    q: 'How do you connect to our code and docs?',
    a: 'Use GitHub/GitLab OAuth or personal access tokens for repos, plus a docs crawler or sitemap for documentation. Continuous sync keeps the index up to date.'
  },
  {
    q: 'Is our data secure?',
    a: 'Yes. We support SSO (SAML/OIDC), RBAC, token scopes, IP allow‑listing, and full audit logging. Private cloud and on‑prem deployments are available.'
  },
  {
    q: 'What deployment options do you offer?',
    a: 'SaaS, private cloud, and fully on‑prem. Enterprise plans include dedicated clusters and custom SLAs.'
  },
  {
    q: 'How is pricing calculated?',
    a: 'Plans are tiered by API calls and features. Team plans include generous quotas; Enterprise is custom by usage and compliance needs.'
  },
  {
    q: 'What integrations are available?',
    a: 'SDKs for TypeScript and Python, REST and GraphQL APIs, plus IDE extensions and assistant webhooks.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-20 px-6 md:px-12 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">FAQ</h2>
        <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
          {faqs.map((item, i) => (
            <details key={i} className="group open:bg-background/60">
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between">
                <span className="font-medium text-foreground">{item.q}</span>
                <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;