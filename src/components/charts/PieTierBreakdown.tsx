import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export function PieTierBreakdown({ data }: { data: { name: string; value: number }[] }) {
  const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={6}>
            {data.map((_, i) => (<Cell key={i} fill={colors[i % colors.length]} />))}
          </Pie>
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
