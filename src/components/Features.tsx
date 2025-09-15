import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Globe, 
  Shield, 
  BarChart3, 
  Code, 
  GitBranch, 
  Layers, 
  Cloud, 
  Cpu, 
  Lock,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: Zap,
      title: "Auto-Scaling Infrastructure",
      description: "Scale from 0 to millions of requests instantly with our serverless architecture",
      details: [
        "Zero-config auto-scaling",
        "Sub-second cold start times", 
        "Pay only for compute used",
        "99.99% uptime guarantee"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Deployment",
      description: "Deploy across AWS, GCP, and Azure with a single command",
      details: [
        "23 global regions available",
        "Intelligent traffic routing",
        "Cross-cloud failover",
        "Edge computing support"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10", 
      borderColor: "border-secondary/30"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
      details: [
        "Zero-trust architecture",
        "Private VPC deployment",
        "Compliance automation",
        "Audit trail logging"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Comprehensive observability with custom dashboards and alerts",
      details: [
        "Sub-millisecond metrics",
        "Custom alert policies", 
        "Performance insights",
        "Cost optimization tips"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Simple APIs, powerful SDKs, and comprehensive documentation",
      details: [
        "One-line deployment",
        "Native SDK support",
        "Interactive docs",
        "24/7 developer support"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Built-in model versioning with rollback and A/B testing",
      details: [
        "Git-like versioning",
        "Instant rollbacks", 
        "Traffic splitting",
        "Canary deployments"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    }
  ];

  const stats = [
    { label: "Models Deployed", value: "2.5M+", subtext: "Across all platforms" },
    { label: "API Calls/Month", value: "50B+", subtext: "With 99.9% reliability" },
    { label: "Enterprise Customers", value: "500+", subtext: "Trust our platform" },
    { label: "Average Latency", value: "<100ms", subtext: "Global P99 response time" }
  ];
  
  return (
    <section id="features" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 neural-gradient-secondary rounded-full opacity-10 blur-3xl animate-float-subtle"></div>
      
      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">
            <Layers className="w-4 h-4 mr-2" />
            Infrastructure Features
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Everything you need to{' '}
            <span className="neural-gradient bg-clip-text text-transparent">
              scale AI
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From rapid prototyping to production-scale deployments, 
            our platform provides the infrastructure primitives that power the world's most advanced AI applications.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground/70">{stat.subtext}</div>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
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
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details */}
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

                {/* Learn More Link */}
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

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
            Ready to build the future?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and enterprises who trust our infrastructure to power their AI applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="neural-gradient px-8 py-4 rounded-lg text-background font-semibold text-lg hover:scale-105 transition-transform glow-primary">
              Start Building Now
            </button>
            <button className="px-8 py-4 rounded-lg border border-primary/30 text-foreground hover:bg-primary/5 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;