import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "./sonner";
import { copyToClipboard } from "@/features/utils";

export function CopyButton({ value, labelCopied = "Copied!", className = "" }: { value: string; labelCopied?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => { await copyToClipboard(value); setCopied(true); toast.success(labelCopied); setTimeout(() => setCopied(false), 1200); }}
      className={`h-9 px-3 rounded-lg border border-border/60 bg-card/50 hover:bg-card transition-colors inline-flex items-center gap-2 ${className}`}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span className="text-xs hidden sm:inline">{copied ? labelCopied : "Copy"}</span>
    </button>
  );
}
