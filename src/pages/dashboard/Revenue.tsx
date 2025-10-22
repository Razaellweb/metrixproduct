import { DashboardLayout } from "@/components/dashboard/Layout";
import { ChartCard } from "@/components/charts/ChartCard";
import { Card } from "@/components/ui/Card";
import { revenueSeries } from "@/features/mock";
import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, LineChart, Line } from "recharts";

export default function Revenue() {
  const usage = revenueSeries.map((r) => ({ date: r.date, usage: r.usageRevenue }));
  const mrr = revenueSeries.map((r) => ({ date: r.date, mrr: r.mrr }));
  const leakage = revenueSeries.map((r) => ({ date: r.date, leakage: r.leakage }));

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Usage revenue" subtitle="Monthly">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usage}>
                <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
                <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, { month: "short", year: "2-digit" })} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tickFormatter={(v) => Intl.NumberFormat().format(v)} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Bar dataKey="usage" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="MRR" subtitle="Monthly recurring revenue">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mrr}>
                <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
                <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, { month: "short", year: "2-digit" })} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tickFormatter={(v) => Intl.NumberFormat().format(v)} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Line dataKey="mrr" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Revenue leakage" subtitle="Alerts">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leakage}>
                <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
                <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, { month: "short", year: "2-digit" })} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tickFormatter={(v) => Intl.NumberFormat().format(v)} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Bar dataKey="leakage" fill="hsl(var(--chart-5))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
