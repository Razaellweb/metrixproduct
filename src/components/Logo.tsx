
import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group" aria-label="Context Engine Home">
      <div className="relative h-9 w-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 rounded-lg" style={{
          background: 'conic-gradient(from 120deg, hsl(var(--primary)/.25), hsl(var(--secondary)/.25))'
        }} />
        <span className="relative z-10 font-mono text-sm font-semibold text-primary tracking-tight">CE</span>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">context engine</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">secure context layer</span>
      </div>
    </a>
  );
};

export default Logo;
