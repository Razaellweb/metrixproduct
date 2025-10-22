import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { defaultTiers } from "@/features/mock";
import { Link } from "react-router-dom";
import { t } from "@/features/i18n";
import { useAuth } from "@/features/auth-context";

export default function Pricing() {
  const { user } = useAuth();
  const locale = user?.locale ?? "en";

  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="text-sm text-muted-foreground">{t(locale, "pricing")}</div>
              <div className="font-semibold">Current Pricing Model</div>
            </div>
            <Link to="/dashboard/pricing/edit" className="h-9 px-3 rounded-lg neural-gradient text-white inline-flex items-center">{t(locale, "edit_pricing")}</Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-2">Tier</th>
                  <th>Base</th>
                  <th>Included</th>
                  <th>Overage</th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                {defaultTiers.map((t, i) => (
                  <tr key={t.id} className={i % 2 ? "bg-card/40" : ""}>
                    <td className="py-3 font-medium">{t.name}</td>
                    <td>${t.basePrice}/{t.currency}</td>
                    <td>{t.includedUnits.toLocaleString()}</td>
                    <td>${t.overagePrice}/{t.currency}</td>
                    <td className="max-w-xl">{t.features.join(", ")}</td>
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
