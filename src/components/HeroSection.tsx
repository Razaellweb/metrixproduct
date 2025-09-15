import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, ShieldCheck, Github, Search, BookOpenText, Database, LockKeyhole } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'index' | 'security'>('search');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    const cycle = setInterval(() => {
      setActiveTab((prev) => (prev === 'search' ? 'index' : prev === 'index' ? 'security' : 'search'))
    }, 3500);
    return () => { clearTimeout(timer); clearInterval(cycle); };
  }, []);

  const valueBullets = [
    'instant connections to repos and docs: github/gitlab ingest, doc indexing, and continuous sync.',
    'relevance that developers trust: hybrid keyword + semantic search returns deduped, source‑linked snippets.',
    'enterprise‑grade security: sso, rbac, token scopes, audit logs, and private deployments.',
    'made for ai and dev workflows: simple apis/sdks, ide integrations, and usage analytics in a live dashboard.'
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-15" />
      <div className="absolute inset-0 animated-grid opacity-10" />

      <div className="absolute top-20 left-16 w-28 h-28 neural-gradient rounded-full opacity-20 blur-2xl" />
      <div className="absolute bottom-24 right-16 w-36 h-36 neural-gradient-secondary rounded-full opacity-20 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5 text-primary">
              <ShieldCheck className="w-4 h-4 mr-2" />
              New: Private cloud and on‑prem now available
            </Badge>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
              the secure context layer for your
              <span className="block neural-gradient bg-clip-text text-transparent">code, docs, and ai</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              context engine connects to github/gitlab and technical documentation, indexes them into a unified, searchable knowledge base, and exposes fast apis and a developer dashboard so apps, ides, and ai assistants can retrieve the right snippet at the right time.
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              built for security‑first teams with role‑based access, tokenized apis, audit trails, and deploy‑anywhere options (saas, private cloud, on‑prem).
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="/signup">
              <Button size="lg" variant="neural" className="px-8 py-4 text-lg h-auto rounded-full group">
                start free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#features">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 px-8 py-4 text-lg h-auto rounded-full group">
                <Play className="mr-2 w-5 h-5" />
                see how it works
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
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="neural-glass rounded-2xl overflow-hidden">
            <div className="bg-card/80 border-b border-primary/15 p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 neural-gradient rounded-lg flex items-center justify-center text-background">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Context Engine Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Connections • Indexing • Search • Security</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary">SSO</Badge>
                <Badge variant="outline" className="text-muted-foreground">RBAC</Badge>
                <Badge variant="outline" className="text-muted-foreground">Audit</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[480px]">
              {/* Left: Connections */}
              <div className="p-6 border-r border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Github className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Connections</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'GitHub • monorepo', status: 'synced' },
                    { name: 'GitLab • services', status: 'indexing' },
                    { name: 'Docs • handbook', status: 'synced' },
                  ].map((c, i) => (
                    <div key={i} className="infrastructure-card p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-primary/15 text-primary flex items-center justify-center">
                          <span className="text-[10px] font-mono">{i+1}</span>
                        </div>
                        <span className="text-sm">{c.name}</span>
                      </div>
                      <Badge variant={c.status === 'synced' ? 'secondary' : 'outline'} className={c.status === 'synced' ? 'bg-secondary/20 text-secondary' : ''}>{c.status}</Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-xs text-muted-foreground mb-2">Security</div>
                  <div className="infrastructure-card p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LockKeyhole className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Token scope: read.repo, read.docs</span>
                    </div>
                    <Badge variant="outline">rotates in 23h</Badge>
                  </div>
                </div>
              </div>

              {/* Center: Search */}
              <div className="p-6 border-r border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Semantic Search</span>
                </div>

                <div className="infrastructure-card p-3 rounded-lg mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Query</span>
                    <span className="px-2 py-1 rounded bg-muted text-sm">"how to refresh oauth tokens in node?"</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'auth.ts • refreshAccessToken()', source: 'apps/api/src/auth.ts', score: '0.92' },
                    { title: 'OAuth guide • token lifetimes', source: 'docs/security/oauth.md', score: '0.88' },
                    { title: 'client.ts • retryWithBackoff', source: 'packages/sdk/client.ts', score: '0.84' },
                  ].map((r, i) => (
                    <div key={i} className="infrastructure-card p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">{r.title}</div>
                          <div className="text-xs text-muted-foreground">{r.source}</div>
                        </div>
                        <Badge variant="outline">relevance {r.score}</Badge>
                      </div>
                      <pre className="mt-3 text-xs terminal-text whitespace-pre-wrap">
{`// snippet
async function refreshAccessToken() { /* ... */ }`}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Indexing/Docs */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpenText className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Indexing Status</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Repos processed', value: '24/24' },
                    { label: 'Docs pages indexed', value: '1,482' },
                    { label: 'Embeddings updated', value: '98% today' },
                  ].map((m, i) => (
                    <div key={i} className="infrastructure-card p-3 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <span className="text-sm font-medium">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  APIs: REST • GraphQL • SDKs (TS, Python)
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