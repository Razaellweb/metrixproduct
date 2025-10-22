import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/features/auth-context";
import { useNavigate, Link } from "react-router-dom";
import { t } from "@/features/i18n";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["Developer", "Product Manager", "Finance Team"]) ,
});

export default function Signin() {
  const { signin, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const locale = user?.locale ?? "en";

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(values: any) {
    setLoading(true);
    await signin(values.email, values.password, values.role);
    setLoading(false);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative animated-grid">
        <div className="absolute inset-0 neural-gradient opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md text-center p-8">
            <div className="text-4xl font-bold tracking-tight mb-4">Metrix</div>
            <p className="text-muted-foreground">Realtime metering, dynamic pricing, and Stripe billing — unified.</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center">
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-2xl font-semibold">{t(locale, "signin_title")}</h1>
            <p className="text-sm text-muted-foreground">{t(locale, "signin_sub")}</p>
          </div>
          <div>
            <label className="text-sm" htmlFor="email">{t(locale, "email")}</label>
            <input id="email" type="email" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...register("email")} />
            {errors.email && <p className="text-xs text-destructive mt-1">{String(errors.email.message)}</p>}
          </div>
          <div>
            <label className="text-sm" htmlFor="password">{t(locale, "password")}</label>
            <input id="password" type="password" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...register("password")} />
            {errors.password && <p className="text-xs text-destructive mt-1">{String(errors.password.message)}</p>}
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
            {loading ? "Signing in..." : t(locale, "signin")}
          </button>
          <div className="flex justify-between text-xs">
            <Link to="/signup" className="text-muted-foreground hover:text-foreground">Create account</Link>
            <Link to="/reset-password" className="text-muted-foreground hover:text-foreground">{t(locale, "forgot_password")}</Link>
          </div>
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
