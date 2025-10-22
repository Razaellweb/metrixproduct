import { PropsWithChildren, ReactNode } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

export function ChartCard({ title, subtitle, action, children }: PropsWithChildren<{ title: string; subtitle?: string; action?: ReactNode }>) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
          <div className="font-semibold tracking-tight">{title}</div>
        </div>
        {action}
      </CardHeader>
      <div className="h-1 neural-gradient" />
      <CardContent>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 blur-2xl opacity-20 neural-gradient rounded-full" />
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
