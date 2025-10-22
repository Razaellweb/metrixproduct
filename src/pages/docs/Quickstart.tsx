import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";
import { useAuth } from "@/features/auth-context";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Quickstart() {
  const { user } = useAuth();
  const [events, setEvents] = useState<{ ts: number; ok: boolean }[]>([]);
  const [running, setRunning] = useState(false);

  async function run() {
    setRunning(true);
    const ok = Math.random() > 0.1; // 90% success
    await new Promise((r) => setTimeout(r, 600));
    setEvents((e) => [...e, { ts: Date.now(), ok }]);
    setRunning(false);
  }

  const stats = useMemo(() => {
    const total = events.length;
    const success = events.filter((e) => e.ok).length;
    const rate = total ? Math.round((success / total) * 100) : 0;
    return { total, success, rate };
  }, [events]);

  const data = events.map((e) => ({
    time: new Date(e.ts).toLocaleTimeString(),
    success: e.ok ? 1 : 0,
  }));

  const nodeSample = `import fetch from 'node-fetch';\n\nawait fetch('https://api.metrix.dev/meter', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': 'Bearer ${user?.apiKey ?? "mx_demo"}'\n  },\n  body: JSON.stringify({ event: 'image.generate', units: 1, idempotencyKey: 'k_'+Date.now() })\n})`;

  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="font-semibold">Node.js quickstart</div>
          </CardHeader>
          <CardContent>
            <pre className="code-block text-xs overflow-auto">
{nodeSample}
            </pre>
            <div className="mt-3">
              <CopyButton value={nodeSample} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="font-semibold">Run in browser</div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={run} disabled={running} className="h-10 px-3 rounded-lg neural-gradient text-white disabled:opacity-60 disabled:cursor-not-allowed">{running ? 'Sending…' : 'Send usage event'}</button>
              <button onClick={()=>setEvents([])} className="h-10 px-3 rounded-lg border border-border/60 hover:bg-card">Clear</button>
              <div className="text-xs text-muted-foreground">Using API key: <span className="font-mono">{user?.apiKey ?? 'mx_demo'}</span></div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-border/60 p-2 bg-card/50">
                <div className="text-xs text-muted-foreground">Total</div>
                <div className="text-lg font-semibold">{stats.total}</div>
              </div>
              <div className="rounded-lg border border-border/60 p-2 bg-card/50">
                <div className="text-xs text-muted-foreground">Success</div>
                <div className="text-lg font-semibold text-success">{stats.success}</div>
              </div>
              <div className="rounded-lg border border-border/60 p-2 bg-card/50">
                <div className="text-xs text-muted-foreground">Success rate</div>
                <div className="text-lg font-semibold">{stats.rate}%</div>
              </div>
            </div>
            <div className="h-48 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="gradOk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.7}/>
                      <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="hsl(var(--border))" strokeOpacity={0.3} vertical={false} />
                  <XAxis dataKey="time" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="success" stroke="hsl(var(--success))" fill="url(#gradOk)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
