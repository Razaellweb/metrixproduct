import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { defaultTiers } from "@/features/mock";
import { useState } from "react";

export default function PricingEdit() {
  const [tiers, setTiers] = useState(defaultTiers);

  function updateTier(idx: number, key: string, value: any) {
    setTiers((prev) => prev.map((t, i) => i === idx ? { ...t, [key]: value } : t));
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2">
        {tiers.map((tier, i) => (
          <Card key={tier.id}>
            <CardHeader>
              <div className="font-semibold">{tier.name}</div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs">Currency</label>
                <select value={tier.currency} onChange={(e) => updateTier(i, "currency", e.target.value)} className="mt-1 w-full h-10 rounded-md border border-border/60 bg-card/50 px-3">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div>
                <label className="text-xs">Base price</label>
                <input type="number" value={tier.basePrice} onChange={(e) => updateTier(i, "basePrice", Number(e.target.value))} className="mt-1 w-full h-10 rounded-md border border-border/60 bg-card/50 px-3" />
              </div>
              <div>
                <label className="text-xs">Included units</label>
                <input type="number" value={tier.includedUnits} onChange={(e) => updateTier(i, "includedUnits", Number(e.target.value))} className="mt-1 w-full h-10 rounded-md border border-border/60 bg-card/50 px-3" />
              </div>
              <div>
                <label className="text-xs">Overage price</label>
                <input type="number" step="0.0001" value={tier.overagePrice} onChange={(e) => updateTier(i, "overagePrice", Number(e.target.value))} className="mt-1 w-full h-10 rounded-md border border-border/60 bg-card/50 px-3" />
              </div>
            </CardContent>
            <CardFooter>
              <button className="h-10 px-3 rounded-lg neural-gradient text-white">Save</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
