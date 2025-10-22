import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ChartCard } from "@/components/charts/ChartCard";
import { CompositeMetricsChart } from "@/components/charts/CompositeMetricsChart";
import { useAuth } from "@/features/auth-context";
import { usageSeries } from "@/features/mock";
import { t } from "@/features/i18n";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Overview() {
  const { user } = useAuth();
  const locale = user?.locale ?? "en";
  const subscribed = typeof window !== 'undefined' && localStorage.getItem('metrix_subscribed') === 'true';

  const totalEvents = usageSeries.reduce((a, b) => a + b.events, 0);
  const estSpend = Math.max(0, Math.round(totalEvents * 0.00025));

  return (
    <DashboardLayout>
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
        <Card className="xl:col-span-3 overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{t(locale, 'current_usage')}</div>
              {!subscribed && (
                <Link to="/dashboard/billing" className="h-9 px-3 rounded-lg neural-gradient text-white inline-flex items-center">
                  {t(locale, 'subscribe')}
                </Link>
              )}
            </div>
          </CardHeader>
          <div className="h-1 neural-gradient" />
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="text-xs text-muted-foreground">30d events</div>
                <div className="text-2xl font-semibold">{totalEvents.toLocaleString()}</div>
              </div>
              <div className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="text-xs text-muted-foreground">Avg latency</div>
                <div className="text-2xl font-semibold">{Math.round(usageSeries.reduce((a,b)=>a+b.latencyMs,0)/usageSeries.length)}ms</div>
              </div>
              <div className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="text-xs text-muted-foreground">Est. usage spend</div>
                <div className="text-2xl font-semibold">${estSpend.toLocaleString()}</div>
              </div>
            </div>
            <ChartCard title="System metrics (30d)" subtitle={t(locale, "usage")}>
              <CompositeMetricsChart data={usageSeries} />
            </ChartCard>
          </CardContent>
        </Card>
        <Card className="overflow-hidden xl:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-2"><Bell className="size-4"/> <div className="text-sm text-muted-foreground">{t(locale, "alerts")}</div></div>
          </CardHeader>
          <div className="h-1 neural-gradient-secondary" />
          <CardContent>
            <ul className="grid md:grid-cols-3 gap-3 text-sm">
              <li className="flex items-start gap-2 p-3 rounded-lg border border-border/60 bg-card/50"><span className="size-2 mt-1 rounded-full bg-warning"/> Spike detected in usage: +34%</li>
              <li className="flex items-start gap-2 p-3 rounded-lg border border-border/60 bg-card/50"><span className="size-2 mt-1 rounded-full bg-info"/> New pricing experiment active for Pro tier</li>
              <li className="flex items-start gap-2 p-3 rounded-lg border border-border/60 bg-card/50"><span className="size-2 mt-1 rounded-full bg-success"/> Entitlement cache hit rate 97%</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
