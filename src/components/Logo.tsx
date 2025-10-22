
import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group" aria-label="Metrix Home">
      <div className="relative h-9 w-9 rounded-lg bg-primary/12 border border-primary/25 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 rounded-lg" style={{
          background: 'conic-gradient(from 100deg, hsl(var(--primary)/.22), hsl(var(--accent)/.22))'
        }} />
        <span className="relative z-10 font-mono text-sm font-semibold text-primary tracking-tight">M</span>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">metrix</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">usage-based billing</span>
      </div>
    </a>
  );
};

export default Logo;
