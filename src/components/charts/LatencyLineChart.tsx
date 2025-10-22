import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { UsagePoint } from "@/features/types";

export function LatencyLineChart({ data }: { data: UsagePoint[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
          <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, { month: "short", day: "numeric" })} tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis tickFormatter={(v) => `${v}ms`} tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip labelFormatter={(v) => new Date(v as string).toLocaleDateString()} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
          <Line type="monotone" dataKey="latencyMs" stroke="hsl(var(--secondary))" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="entitlementMs" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
