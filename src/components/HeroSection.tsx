import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Zap, Cpu, Globe, Shield, BarChart3, Code, Terminal, Activity } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [terminalLines, setTerminalLines] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Animate terminal lines
    const lineTimer = setInterval(() => {
      setTerminalLines(prev => (prev + 1) % 6);
    }, 1500);

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(lineTimer);
      clearInterval(metricTimer);
    };
  }, []);

  const metrics = [
    { label: 'Models Deployed', value: '847K+', icon: Cpu, color: 'text-primary' },
    { label: 'Inference Requests/sec', value: '2.4M', icon: Zap, color: 'text-secondary' },
    { label: 'Global Regions', value: '23', icon: Globe, color: 'text-accent' },
    { label: 'Uptime SLA', value: '99.99%', icon: Shield, color: 'text-primary' }
  ];

  const terminalCommands = [
    '$ trynia deploy --model gpt-4 --scale auto',
    '✓ Model deployed in 2.3s',
    '$ trynia metrics --live',
    '→ Requests: 12.4k/min | Latency: 89ms',
    '$ trynia scale --replicas 50',
    '✓ Scaled to 50 replicas across 3 regions'
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated neural grid background */}
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="absolute inset-0 animated-grid opacity-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 neural-gradient rounded-full opacity-20 blur-xl animate-float-subtle"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 neural-gradient-secondary rounded-full opacity-15 blur-2xl animate-neural-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent rounded-full opacity-25 blur-lg animate-infrastructure-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          {/* Announcement Badge */}
          <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
              <Zap className="w-4 h-4 mr-2" />
              New: Multi-cloud deployment now available
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-foreground">Deploy AI at</span>{' '}
              <span className="neural-gradient bg-clip-text text-transparent">
                any scale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The infrastructure platform that scales from prototype to production. 
              Deploy models with <span className="text-primary font-semibold">zero configuration</span>, 
              monitor performance in real-time, and scale globally with confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="neural-gradient text-background font-semibold px-8 py-4 text-lg h-auto glow-primary group">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 text-lg h-auto group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className={`text-sm text-muted-foreground transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Trusted by 2,500+ AI teams • No credit card required • 7-day free trial
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1200 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="neural-glass rounded-2xl overflow-hidden infrastructure-glow">
            {/* Dashboard Header */}
            <div className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 neural-gradient rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Infrastructure Console</h3>
                    <p className="text-sm text-muted-foreground">Real-time deployment monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                    Production
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
              {/* Left: Terminal */}
              <div className="lg:col-span-1 bg-background/50 p-6 border-r border-primary/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Deploy Console</span>
                  </div>
                  
                  <div className="code-block space-y-2 text-sm">
                    {terminalCommands.slice(0, terminalLines + 1).map((cmd, index) => (
                      <div
                        key={index}
                        className={`terminal-text animate-slide-up-fade ${
                          cmd.startsWith('$') ? 'text-primary' : 
                          cmd.startsWith('✓') ? 'text-success' : 
                          cmd.startsWith('→') ? 'text-secondary' : 'text-muted-foreground'
                        }`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        {cmd}
                        {index === terminalLines && cmd.startsWith('$') && (
                          <span className="animate-terminal-cursor">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center: Metrics */}
              <div className="lg:col-span-1 p-6 border-r border-primary/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-foreground">Live Metrics</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div
                        key={index}
                        className={`infrastructure-card p-4 rounded-lg transition-all duration-500 ${
                          activeMetric === index ? 'border-primary/40 glow-primary' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <metric.icon className={`w-4 h-4 ${metric.color}`} />
                          <span className="text-xs text-muted-foreground">{metric.label}</span>
                        </div>
                        <div className="text-lg font-bold text-foreground">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Performance Graph Placeholder */}
                  <div className="infrastructure-card p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-foreground mb-3">Request Latency</h4>
                    <div className="flex items-end space-x-1 h-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-primary/30 rounded-t flex-1 animate-infrastructure-glow"
                          style={{
                            height: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Model Status */}
              <div className="lg:col-span-1 p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Active Models</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: 'gpt-4-turbo', status: 'running', requests: '847/s', latency: '89ms' },
                      { name: 'claude-3-opus', status: 'running', requests: '234/s', latency: '124ms' },
                      { name: 'llama-2-70b', status: 'scaling', requests: '156/s', latency: '203ms' },
                      { name: 'whisper-large', status: 'running', requests: '67/s', latency: '45ms' },
                    ].map((model, index) => (
                      <div key={index} className="infrastructure-card p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{model.name}</span>
                          <Badge 
                            variant={model.status === 'running' ? 'default' : 'secondary'}
                            className={
                              model.status === 'running' 
                                ? 'bg-primary/20 text-primary border-primary/30' 
                                : 'bg-accent/20 text-accent border-accent/30'
                            }
                          >
                            {model.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{model.requests}</span>
                          <span>{model.latency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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