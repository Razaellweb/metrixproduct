import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";

interface MetricDataPoint {
  date: string;
  usage: number;
  latency: number;
  [key: string]: string | number;
}

interface CompositeMetricsChartProps {
  data: MetricDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border/80 rounded-lg p-3 shadow-lg">
        <p className="text-xs text-muted-foreground mb-2">{payload[0]?.payload?.date}</p>
        {payload.map((entry: any, idx: number) => (
          <p key={idx} className="text-sm font-medium" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DEMO_DATA = [
  { date: "Jan 1", usage: 2400, latency: 24 },
  { date: "Jan 5", usage: 2210, latency: 13 },
  { date: "Jan 10", usage: 2290, latency: 9 },
  { date: "Jan 15", usage: 2000, latency: 28 },
  { date: "Jan 20", usage: 2181, latency: 23 },
  { date: "Jan 25", usage: 2500, latency: 17 },
  { date: "Jan 30", usage: 2100, latency: 35 },
];

export function CompositeMetricsChart({ data }: CompositeMetricsChartProps) {
  const chartData = DEMO_DATA;
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
        />
        <YAxis 
          yAxisId="left"
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
          label={{ value: "Usage", angle: -90, position: "insideLeft", offset: 10, style: { fontSize: 12 } }}
        />
        <YAxis 
          yAxisId="right" 
          orientation="right"
          tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
          tickLine={false}
          label={{ value: "Latency (ms)", angle: 90, position: "insideRight", offset: 10, style: { fontSize: 12 } }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ paddingTop: 16, fontSize: 12 }} />
        <Area 
          yAxisId="left"
          type="monotone" 
          dataKey="usage" 
          fill="url(#usageGradient)" 
          stroke="hsl(var(--primary))" 
          strokeWidth={2}
          name="Usage Events"
          isAnimationActive={true}
        />
        <Line 
          yAxisId="right"
          type="monotone" 
          dataKey="latency" 
          stroke="hsl(var(--chart-2))" 
          strokeWidth={2.5}
          dot={false}
          name="Latency (p50)"
          isAnimationActive={true}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}