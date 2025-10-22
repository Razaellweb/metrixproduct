import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { defaultTiers } from "@/features/mock";
import { useAuth } from "@/features/auth-context";
import { t } from "@/features/i18n";

export default function Billing() {
  const { user } = useAuth();
  const locale = user?.locale ?? "en";
  const subscribed = typeof window !== 'undefined' && localStorage.getItem('metrix_subscribed') === 'true';
  const currentPlan = (typeof window !== 'undefined' && localStorage.getItem('metrix_plan')) || 'starter';

  function selectPlan(id: string, basePrice: number) {
    localStorage.setItem('metrix_plan', id);
    localStorage.setItem('metrix_subscribed', basePrice > 0 ? 'true' : 'false');
    alert(`Plan set to ${id}`);
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="text-sm text-muted-foreground">{t(locale, "billing")}</div>
                <div className="font-semibold">Manage your plan</div>
              </div>
              <div className={`h-9 px-3 rounded-lg inline-flex items-center ${subscribed ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>{subscribed ? 'Active subscription' : 'Free plan'}</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {defaultTiers.map((tier) => (
                <div key={tier.id} className={`rounded-xl p-4 border border-border/60 bg-card/50 ${currentPlan===tier.id ? 'ring-2 ring-primary' : ''}`}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="font-semibold">{tier.name}</div>
                    <div className="text-sm text-muted-foreground">{tier.currency}</div>
                  </div>
                  <div className="text-3xl font-bold mb-1">{tier.basePrice === 0 ? 'Free' : `$${tier.basePrice}/mo`}</div>
                  <div className="text-xs text-muted-foreground mb-3">{tier.includedUnits.toLocaleString()} events included • ${tier.overagePrice}/unit overage</div>
                  <ul className="text-sm space-y-1 mb-4 list-disc list-inside">
                    {tier.features.map((f) => (<li key={f} className="text-muted-foreground">{f}</li>))}
                  </ul>
                  <button onClick={() => selectPlan(tier.id, tier.basePrice)} className="w-full h-10 rounded-lg neural-gradient text-white">
                    {currentPlan === tier.id ? 'Selected' : tier.basePrice === 0 ? 'Choose Free' : 'Upgrade'}
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
