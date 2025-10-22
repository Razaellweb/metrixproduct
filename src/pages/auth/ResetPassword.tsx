import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "@/features/i18n";
import { useAuth } from "@/features/auth-context";
import { useState } from "react";

const requestSchema = z.object({ email: z.string().email() });
const resetSchema = z.object({ code: z.string().min(4), newPassword: z.string().min(8) });

export default function ResetPassword() {
  const { user } = useAuth();
  const locale = user?.locale ?? "en";
  const [phase, setPhase] = useState<"request" | "reset">("request");

  const req = useForm({ resolver: zodResolver(requestSchema) });
  const reset = useForm({ resolver: zodResolver(resetSchema) });

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md p-6 rounded-2xl neural-glass">
        {phase === "request" ? (
          <form className="space-y-4" onSubmit={req.handleSubmit(() => setPhase("reset"))}>
            <div>
              <h1 className="text-2xl font-semibold">{t(locale, "reset_password")}</h1>
              <p className="text-sm text-muted-foreground">We will email a verification code.</p>
            </div>
            <div>
              <label className="text-sm" htmlFor="email">{t(locale, "email")}</label>
              <input id="email" type="email" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...req.register("email")} />
              {req.formState.errors.email && <p className="text-xs text-destructive mt-1">{String(req.formState.errors.email.message)}</p>}
            </div>
            <button className="w-full h-11 rounded-lg neural-gradient text-white font-medium glow-primary" type="submit">
              {t(locale, "request_reset")}
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={reset.handleSubmit(() => setPhase("request"))}>
            <div>
              <h1 className="text-2xl font-semibold">{t(locale, "reset_password")}</h1>
            </div>
            <div>
              <label className="text-sm" htmlFor="code">{t(locale, "verification_code")}</label>
              <input id="code" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...reset.register("code")} />
              {reset.formState.errors.code && <p className="text-xs text-destructive mt-1">{String(reset.formState.errors.code.message)}</p>}
            </div>
            <div>
              <label className="text-sm" htmlFor="newPassword">{t(locale, "new_password")}</label>
              <input id="newPassword" type="password" className="mt-1 w-full h-11 rounded-lg border border-border/60 bg-card/50 px-3 outline-none focus:ring-2 focus:ring-primary" {...reset.register("newPassword")} />
              {reset.formState.errors.newPassword && <p className="text-xs text-destructive mt-1">{String(reset.formState.errors.newPassword.message)}</p>}
            </div>
            <button className="w-full h-11 rounded-lg neural-gradient text-white font-medium glow-primary" type="submit">
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
