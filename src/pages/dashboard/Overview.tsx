import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { ChartCard } from "@/components/charts/ChartCard";
import { UsageAreaChart } from "@/components/charts/UsageAreaChart";
import { LatencyLineChart } from "@/components/charts/LatencyLineChart";
import { useAuth } from "@/features/auth-context";
import { usageSeries } from "@/features/mock";
import { t } from "@/features/i18n";
import { KeyRound, Bell, Rocket } from "lucide-react";

export default function Overview() {
  const { user } = useAuth();
  const locale = user?.locale ?? "en";

  return (
    <DashboardLayout>
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
        <Card className="xl:col-span-2 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="size-4 glow-primary" />
              <div className="text-sm text-muted-foreground">{t(locale, "api_keys")}</div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton value={user?.apiKey ?? "mx_demo_key"} labelCopied={t(locale, "copied")} />
            </div>
          </CardHeader>
          <div className="h-1 neural-gradient" />
          <CardContent>
            <div className="text-xs text-muted-foreground">{t(locale, "your_sandbox_key")}</div>
            <div className="font-mono text-lg select-all mt-1">{user?.apiKey ?? "mx_demo_key_123"}</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <ChartCard title="Usage events (30d)" subtitle={t(locale, "usage")}> 
                <UsageAreaChart data={usageSeries} />
              </ChartCard>
              <ChartCard title="Latency & entitlement (ms)" subtitle="p50"> 
                <LatencyLineChart data={usageSeries} />
              </ChartCard>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2"><Bell className="size-4"/> <div className="text-sm text-muted-foreground">{t(locale, "alerts")}</div></div>
          </CardHeader>
          <div className="h-1 neural-gradient-secondary" />
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span className="size-2 mt-1 rounded-full bg-warning"/> Spike detected in usage: +34%</li>
              <li className="flex items-start gap-2"><span className="size-2 mt-1 rounded-full bg-info"/> New pricing experiment active for Pro tier</li>
              <li className="flex items-start gap-2"><span className="size-2 mt-1 rounded-full bg-success"/> Entitlement cache hit rate 97%</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="xl:col-span-3 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2"><Rocket className="size-4"/> Quickstarts</div>
          </CardHeader>
          <div className="h-1 neural-gradient" />
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { lang: "Node.js", color: "from-cyan-500 to-blue-500" },
                { lang: "Python", color: "from-fuchsia-500 to-pink-500" },
                { lang: "Go", color: "from-lime-500 to-emerald-500" },
              ].map((q) => (
                <div key={q.lang} className="rounded-xl p-4 border border-border/60 bg-card/50 hover:bg-card transition-all">
                  <div className={`h-24 rounded-lg bg-gradient-to-br ${q.color} opacity-80 mb-3`} />
                  <div className="font-semibold">{q.lang} SDK</div>
                  <div className="text-xs text-muted-foreground">Idempotent metering; 3 lines.</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
