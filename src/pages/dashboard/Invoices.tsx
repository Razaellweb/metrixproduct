import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { invoices } from "@/features/mock";
import { downloadBlob } from "@/features/utils";

export default function Invoices() {
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

  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between w-full">
            <div className="font-semibold">Invoices</div>
            <div className="flex items-center gap-2">
              <button onClick={() => download("csv")} className="h-9 px-3 rounded-lg border border-border/60 hover:bg-card">CSV</button>
              <button onClick={() => download("pdf")} className="h-9 px-3 rounded-lg neural-gradient text-white">PDF</button>
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
                </tr>
              </thead>
              <tbody>
                {invoices.map((i, idx) => (
                  <tr key={i.id} className={idx % 2 ? "bg-card/40" : ""}>
                    <td className="py-3 font-mono text-xs">{i.id}</td>
                    <td>{i.customer}</td>
                    <td>{i.currency} {i.amount.toLocaleString()}</td>
                    <td>{i.period}</td>
                    <td>
                      <span className={`px-2 py-0.5 rounded text-xs ${i.status === "paid" ? "bg-success/20 text-success" : i.status === "open" ? "bg-warning/20 text-warning" : "bg-destructive/20 text-destructive"}`}>{i.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
