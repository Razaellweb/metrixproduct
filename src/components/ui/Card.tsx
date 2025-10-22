import { PropsWithChildren } from "react";

export function Card({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm infrastructure-card ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`px-4 py-3 border-b border-border/50 flex items-center justify-between ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`px-4 py-3 border-t border-border/50 ${className}`}>{children}</div>;
}
