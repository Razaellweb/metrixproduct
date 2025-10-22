import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { invoices } from "@/features/mock";
import { downloadBlob } from "@/features/utils";
import { Fragment, useMemo, useState } from "react";
import { CopyButton } from "@/components/ui/CopyButton";

export default function Invoices() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "paid" | "open" | "failed">("all");
  const [sortBy, setSortBy] = useState<"period" | "amount">("period");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [expanded, setExpanded] = useState<string | null>(null);

  function download(type: "csv" | "pdf") {
    if (type === "csv") {
      const header = "id,customer,amount,currency,period,status\n";
      const csv = header + invoices.map((i) => `${i.id},${i.customer},${i.amount},${i.currency},${i.period},${i.status}`).join("\n");
      downloadBlob("invoices.csv", csv, "text/csv");
    } else {
      const text = invoices.map((i) => `${i.id} ${i.customer} ${i.amount}${i.currency} ${i.period} ${i.status}`).join("\n");
      downloadBlob("invoices.pdf", text, "application/pdf");
    }
  }

  function formatMoney(amount: number, currency: string) {
    try {
      return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount / (currency === "JPY" ? 1 : 1));
    } catch {
      return `${currency} ${amount.toLocaleString()}`;
    }
  }

  const filtered = useMemo(() => {
    let rows = invoices.filter((i) =>
      [i.id, i.customer, i.period, i.status].join(" ").toLowerCase().includes(query.toLowerCase())
    );
    if (status !== "all") rows = rows.filter((i) => i.status === status);
    rows.sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      if (sortBy === "amount") return (a.amount - b.amount) * dir;
      // period sort by date string YYYY-MM
      return (a.period.localeCompare(b.period)) * dir;
    });
    return rows;
  }, [query, status, sortBy, sortDir]);

  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Invoices</div>
              <div className="flex items-center gap-2">
                <button onClick={() => download("csv")} className="h-9 px-3 rounded-lg border border-border/60 hover:bg-card">CSV</button>
                <button onClick={() => download("pdf")} className="h-9 px-3 rounded-lg neural-gradient text-white">PDF</button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              <div className="flex-1 flex items-center gap-2">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by id, customer, or period" className="flex-1 h-9 px-3 rounded-lg bg-card border border-border/60 outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div className="flex items-center gap-2">
                {(["all","paid","open","failed"] as const).map((s)=> (
                  <button key={s} onClick={()=>setStatus(s)} className={`h-9 px-3 rounded-lg border ${status===s? 'neural-gradient text-white border-transparent' : 'border-border/60 hover:bg-card'}`}>{s[0].toUpperCase()+s.slice(1)}</button>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as any)} className="h-9 px-3 rounded-lg bg-card border border-border/60">
                  <option value="period">Sort: Period</option>
                  <option value="amount">Sort: Amount</option>
                </select>
                <button onClick={()=>setSortDir(d=> d==='asc'?'desc':'asc')} className="h-9 px-3 rounded-lg border border-border/60 hover:bg-card">{sortDir==='asc'?'Asc':'Desc'}</button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-2">Invoice</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Period</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((i, idx) => (
                  <Fragment key={i.id}>
                    <tr className={`${idx % 2 ? "bg-card/40" : ""} hover:bg-card/60 transition-colors`}>
                      <td className="py-3 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span>{i.id}</span>
                          <CopyButton value={i.id} />
                        </div>
                      </td>
                      <td>{i.customer}</td>
                      <td>{formatMoney(i.amount, i.currency)}</td>
                      <td>{i.period}</td>
                      <td>
                        <span className={`px-2 py-0.5 rounded text-xs ${i.status === "paid" ? "bg-success/20 text-success" : i.status === "open" ? "bg-warning/20 text-warning" : "bg-destructive/20 text-destructive"}`}>{i.status}</span>
                      </td>
                      <td>
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={()=>setExpanded(expanded===i.id? null : i.id)} className="h-8 px-3 rounded-lg border border-border/60 hover:bg-card">{expanded===i.id? 'Hide' : 'Details'}</button>
                          <button onClick={()=>downloadBlob(`${i.id}.pdf`, `${i.id} ${i.customer} ${i.amount}${i.currency}`, 'application/pdf')} className="h-8 px-3 rounded-lg neural-gradient text-white">PDF</button>
                        </div>
                      </td>
                    </tr>
                    {expanded===i.id && (
                      <tr className={`${idx % 2 ? "bg-card/40" : ""}`}>
                        <td colSpan={6} className="pb-4 pt-1">
                          <div className="mt-2 rounded-lg border border-border/60 p-3 bg-card/40 text-xs grid sm:grid-cols-4 gap-3">
                            <div><div className="text-muted-foreground">Customer</div><div className="font-medium">{i.customer}</div></div>
                            <div><div className="text-muted-foreground">Amount</div><div className="font-medium">{formatMoney(i.amount, i.currency)}</div></div>
                            <div><div className="text-muted-foreground">Period</div><div className="font-medium">{i.period}</div></div>
                            <div><div className="text-muted-foreground">Status</div><div className="font-medium capitalize">{i.status}</div></div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
