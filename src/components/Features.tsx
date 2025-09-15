import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Github,
  GitBranch,
  BookOpenText,
  Search,
  ShieldCheck,
  KeyRound,
  ChartBarBig,
  Boxes,
  TerminalSquare,
  PlugZap,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: Github,
      title: "Connect repos and docs",
      description: "Link GitHub/GitLab and technical documentation with continuous sync and dedupe.",
      details: [
        "OAuth and token auth",
        "Git monorepo support", 
        "Docs crawler & sitemap",
        "Incremental indexing"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Search,
      title: "Hybrid search that understands",
      description: "Keyword + semantic search returns relevant, source‑linked snippets you can trust.",
      details: [
        "BM25 + embeddings",
        "Repo/file ranking",
        "Regex & code‑aware parsing",
        "Natural language queries"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10", 
      borderColor: "border-secondary/30"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise‑grade security",
      description: "SSO, RBAC, token scopes, and audit logs across all surfaces.",
      details: [
        "SAML/OIDC SSO",
        "Role & project isolation",
        "IP allow‑listing",
        "Comprehensive audit trail"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
    {
      icon: KeyRound,
      title: "Fast APIs & SDKs",
      description: "Low‑latency APIs for context retrieval with SDKs for TypeScript and Python.",
      details: [
        "Token scopes & rotation",
        "Batch context endpoints", 
        "Rate limits & quotas",
        "GraphQL + REST"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: ChartBarBig,
      title: "Live dashboard",
      description: "Indexing status, usage analytics, and search performance in one place.",
      details: [
        "Usage per token/client",
        "Top queries & misses",
        "Indexing health",
        "Exportable reports"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: PlugZap,
      title: "Integrations & IDEs",
      description: "Drop‑in integrations for assistants and IDEs to deliver context where work happens.",
      details: [
        "VS Code extension",
        "JetBrains plugin", 
        "Assistant webhooks",
        "Slack/Chat integrations"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    }
  ];

  const stats = [
    { label: "Sources indexed", value: "10k+", subtext: "repos, docs, wikis" },
    { label: "Avg query latency", value: "<120ms", subtext: "P95 across clusters" },
    { label: "Enterprises", value: "200+", subtext: "security‑first teams" },
    { label: "SDK installs", value: "50k+", subtext: "npm & pypi" }
  ];
  
  return (
    <section id="features" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 neural-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">
            Build the context layer
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance">
            Index everything. Retrieve only what matters.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect code and documentation, then ship intelligent search and retrieval to your apps, IDEs, and assistants with a single API.
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
              className={`infrastructure-card p-8 rounded-2xl group cursor-pointer transition-all duration-500 ${
                hoveredFeature === index 
                  ? `${feature.borderColor} ${feature.bgColor} glow-primary` 
                  : 'border-border/50 hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredFeature === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-0 overflow-hidden'
                }`}>
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className={`pt-2 transition-all duration-300 ${
                  hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button className={`flex items-center space-x-1 text-sm font-medium ${feature.color} hover:underline group`}>
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 pt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
            Ship context to where work happens
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use the APIs to inject relevant snippets into PR bots, IDE code actions, and your AI assistants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="/signup" className="neural-gradient px-8 py-4 rounded-lg text-background font-semibold text-lg hover:scale-105 transition-transform glow-primary">
              Start free
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-lg border border-primary/30 text-foreground hover:bg-primary/5 transition-colors">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;