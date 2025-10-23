import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/features/auth-context";
import { useNavigate } from "react-router-dom";
import { t } from "@/features/i18n";
import { useMemo, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include an uppercase letter")
    .regex(/[0-9]/, "Include a digit"),
  confirm: z.string(),
  role: z.enum(["Developer", "Product Manager", "Finance Team"]),
}).refine((d) => d.password === d.confirm, { path: ["confirm"], message: "Passwords do not match" });

export default function Signup() {
  const { signup, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const locale = user?.locale ?? "en";

  const { register, handleSubmit, formState: { errors }, watch } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(values: any) {
    setLoading(true);
    await signup(values.email, values.password, values.role);
    setLoading(false);
    navigate("/dashboard");
  }

  // Password live feedback
  const passwordValue = watch("password") ?? "";
  const reqs = useMemo(() => {
    const length = passwordValue.length >= 8;
    const upper = /[A-Z]/.test(passwordValue);
    const number = /[0-9]/.test(passwordValue);
    const symbol = /[^A-Za-z0-9]/.test(passwordValue);
    const score = [length, upper, number, symbol].filter(Boolean).length;
    let label: "weak" | "fair" | "good" | "strong" = "weak";
    if (score >= 4 && passwordValue.length >= 12) label = "strong";
    else if (score >= 3) label = "good";
    else if (score >= 2) label = "fair";
    else label = "weak";
    const pct = label === "strong" ? 100 : label === "good" ? 75 : label === "fair" ? 50 : 25;
    return { length, upper, number, symbol, score, label, pct };
  }, [passwordValue]);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative neural-grid">
        <div className="absolute inset-0 neural-gradient opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center p-8">
            <div className="text-4xl font-bold tracking-tight mb-4">Metrix</div>
            <p className="text-muted-foreground">Power your SaaS growth with precision usage-based billing.</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center">
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-2xl font-semibold">{t(locale, "signup_title")}</h1>
            <p className="text-sm text-muted-foreground">{t(locale, "signup_sub")}</p>
          </div>
          <div>
            <label className="text-sm" htmlFor="email">{t(locale, "email")}</label>
            <input id="email" type="email" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...register("email")} />
            {errors.email && <p className="text-xs text-destructive mt-1">{String(errors.email.message)}</p>}
          </div>
          <div>
            <label className="text-sm" htmlFor="password">{t(locale, "password")}</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                aria-describedby="password-help"
                className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 pr-20 outline-none focus:ring-2 focus:ring-primary"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-pressed={showPassword}
                aria-label={showPassword ? t(locale, "hide_password") : t(locale, "show_password")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                {showPassword ? t(locale, "hide_password") : t(locale, "show_password")}
              </button>
            </div>
            {/* Interactive password feedback */}
            <div id="password-help" className="mt-2 space-y-2" aria-live="polite" role="status">
              {/* Strength bar */}
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-300"
                  style={{ width: `${reqs.pct}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-muted-foreground">
                <span>Strength</span>
                <span className={reqs.label === "weak" ? "text-destructive" : reqs.label === "fair" ? "text-foreground/70" : reqs.label === "good" ? "text-primary" : "text-primary"}>
                  {reqs.label}
                </span>
              </div>
              {/* Requirements checklist */}
              <ul className="grid grid-cols-2 gap-1.5 text-xs">
                <li className="flex items-center gap-2">
                  {reqs.length ? <CheckCircle2 size={14} className="text-primary" /> : <Circle size={14} className="text-muted-foreground" />}
                  <span className={reqs.length ? "text-foreground" : "text-muted-foreground"}>8+ characters</span>
                </li>
                <li className="flex items-center gap-2">
                  {reqs.upper ? <CheckCircle2 size={14} className="text-primary" /> : <Circle size={14} className="text-muted-foreground" />}
                  <span className={reqs.upper ? "text-foreground" : "text-muted-foreground"}>1 uppercase</span>
                </li>
                <li className="flex items-center gap-2">
                  {reqs.number ? <CheckCircle2 size={14} className="text-primary" /> : <Circle size={14} className="text-muted-foreground" />}
                  <span className={reqs.number ? "text-foreground" : "text-muted-foreground"}>1 number</span>
                </li>
                <li className="flex items-center gap-2">
                  {reqs.symbol ? <CheckCircle2 size={14} className="text-primary" /> : <Circle size={14} className="text-muted-foreground" />}
                  <span className={reqs.symbol ? "text-foreground" : "text-muted-foreground"}>symbol (recommended)</span>
                </li>
              </ul>
            </div>
            {errors.password && <p className="text-xs text-destructive mt-1">{String(errors.password.message)}</p>}
          </div>
          <div>
            <label className="text-sm" htmlFor="confirm">{t(locale, "confirm_password")}</label>
            <div className="relative">
              <input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 pr-20 outline-none focus:ring-2 focus:ring-primary"
                {...register("confirm")}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-pressed={showConfirm}
                aria-label={showConfirm ? t(locale, "hide_password") : t(locale, "show_password")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? t(locale, "hide_password") : t(locale, "show_password")}
              </button>
            </div>
            {errors.confirm && <p className="text-xs text-destructive mt-1">{String(errors.confirm.message)}</p>}
          </div>
          <div>
            <label className="text-sm" htmlFor="role">Role</label>
            <select id="role" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...register("role")}>
              <option>Developer</option>
              <option>Product Manager</option>
              <option>Finance Team</option>
            </select>
          </div>
          <button disabled={loading} className="w-full h-11 rounded-lg neural-gradient text-white font-medium glow-primary hover:opacity-95 transition-opacity" type="submit">
            {loading ? "Creating..." : t(locale, "signup")}
          </button>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="h-11 rounded-lg border border-border/60 bg-card/50 hover:bg-card">{t(locale, "oauth_google")}</button>
            <button type="button" className="h-11 rounded-lg border border-border/60 bg-card/50 hover:bg-card">{t(locale, "oauth_github")}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
