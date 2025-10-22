import { DashboardLayout } from "@/components/dashboard/Layout";
import { ChartCard } from "@/components/charts/ChartCard";
import { revenueSeries } from "@/features/mock";
import { ResponsiveContainer, CartesianGrid, Tooltip, XAxis, YAxis, Area, ComposedChart, Bar, Line } from "recharts";

export default function Revenue() {
  const data = revenueSeries.map((r) => ({ date: r.date, usage: r.usageRevenue, mrr: r.mrr, leakage: r.leakage }));

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <ChartCard title="Revenue overview" subtitle="MRR, usage, and leakage">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                <defs>
                  <linearGradient id="usageFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.25} vertical={false} />
                <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, { month: "short", year: "2-digit" })} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis yAxisId="left" tickFormatter={(v) => Intl.NumberFormat().format(v)} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis yAxisId="right" orientation="right" hide />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Area yAxisId="left" type="monotone" dataKey="usage" fill="url(#usageFill)" stroke="hsl(var(--chart-2))" strokeWidth={1.5} />
                <Line yAxisId="left" type="monotone" dataKey="mrr" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={false} />
                <Bar yAxisId="right" dataKey="leakage" fill="hsl(var(--chart-5))" opacity={0.8} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
