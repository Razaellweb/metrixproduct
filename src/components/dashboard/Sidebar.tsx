import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Coins,
  FileSpreadsheet,
  LineChart,
  BookOpen,
} from "lucide-react";
import { useAuth } from "@/features/auth-context";
import { t } from "@/features/i18n";

const nav = [
  { to: "/dashboard", labelKey: "dashboard", icon: LayoutDashboard },
  { to: "/dashboard/pricing", labelKey: "pricing", icon: Coins },
  { to: "/dashboard/invoices", labelKey: "invoices", icon: FileSpreadsheet },
  { to: "/dashboard/revenue", labelKey: "revenue", icon: LineChart },
  { to: "/docs/quickstart", labelKey: "quickstart", icon: BookOpen },
];

export function Sidebar() {
  const { user } = useAuth();
  return (
    <div className="h-full sticky top-0 p-4 space-y-6 neural-grid">
      <div className="px-2 pt-2">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg neural-gradient glow-primary" />
          <div>
            <div className="text-sm text-muted-foreground">metrix</div>
            <div className="font-semibold tracking-tight">Control Center</div>
          </div>
        </div>
      </div>
      <nav className="space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group relative overflow-hidden ${isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/5"}`}
            >
              <Icon className="size-4 shrink-0 glow-primary" />
              <span className="text-sm">{t(user?.locale ?? "en", item.labelKey)}</span>
              <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity neural-gradient -z-10 blur-xl" />
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-8 p-3 rounded-xl neural-glass">
        <div className="text-xs text-muted-foreground mb-1">Status</div>
        <div className="flex items-center justify-between">
          <div className="font-medium">API: 99.9%</div>
          <div className="size-2 rounded-full bg-success animate-pulse" />
        </div>
      </div>
    </div>
  );
}
