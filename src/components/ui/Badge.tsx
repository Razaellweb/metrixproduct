import { PropsWithChildren } from "react";

export function Badge({ children, tone = "default" as const }: PropsWithChildren<{ tone?: "default" | "success" | "warning" | "danger" | "info" }>) {
  const map: Record<string, string> = {
    default: "bg-muted text-foreground/80",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
    danger: "bg-destructive/20 text-destructive",
    info: "bg-info/20 text-info",
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${map[tone]}`}>{children}</span>;
}
