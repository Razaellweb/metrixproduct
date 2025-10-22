import { useEffect, useState } from "react";
import { Sun, Moon, Globe, LogOut } from "lucide-react";
import { useAuth } from "@/features/auth-context";
import { t } from "@/features/i18n";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // default to light mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setIsDark((v) => !v)}
      className="h-9 px-3 rounded-lg border border-border/60 bg-card/50 hover:bg-card transition-colors flex items-center gap-2"
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      <span className="text-xs hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

function LanguageSelect() {
  const { user, setLocale } = useAuth();
  return (
    <div className="flex items-center gap-2 h-9 px-2 rounded-lg border border-border/60 bg-card/50">
      <Globe className="size-4" />
      <select
        aria-label="Language"
        value={user?.locale ?? "en"}
        onChange={(e) => setLocale(e.target.value as any)}
        className="bg-transparent text-sm outline-none"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
}

export function Header() {
  const { user, signout } = useAuth();
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <div className="px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden size-8 rounded-lg neural-gradient glow-primary" />
          <div>
            <div className="text-xs text-muted-foreground">{t(user?.locale ?? "en", "app_name")}</div>
            <div className="font-semibold tracking-tight">Realtime Billing & Entitlements</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelect />
          <ThemeToggle />
          <button
            onClick={() => signout()}
            className="h-9 px-3 rounded-lg border border-border/60 bg-card/50 hover:bg-card transition-colors flex items-center gap-2"
            aria-label="Log out"
          >
            <LogOut className="size-4" />
            <span className="text-xs hidden sm:inline">{t(user?.locale ?? "en", "logout")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
