import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useAuth } from "@/features/auth-context";
import { CopyButton } from "@/components/ui/CopyButton";
import { useEffect, useMemo, useState } from "react";

interface ApiKey { id: string; name: string; key: string; createdAt: string; }

function generateKey() {
  return `mx_${Math.random().toString(36).slice(2,10)}_${crypto.getRandomValues(new Uint32Array(1))[0].toString(36)}`;
}

export default function ApiKeys() {
  const { user } = useAuth();
  const storageKey = useMemo(() => `metrix_api_keys_${user?.id ?? 'anon'}`,[user?.id]);
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      try { setKeys(JSON.parse(raw)); } catch {}
    } else {
      setKeys([]);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(keys));
  }, [keys, storageKey]);

  function createKey() {
    if (!name.trim()) return alert('Please enter a name');
    const k: ApiKey = { id: crypto.randomUUID(), name: name.trim(), key: generateKey(), createdAt: new Date().toISOString() };
    setKeys((prev) => [k, ...prev]);
    setName("");
  }

  function removeKey(id: string) {
    setKeys((prev) => prev.filter(k => k.id !== id));
  }

  function mask(k: string) {
    return `${k.slice(0,6)}…${k.slice(-4)}`;
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="text-sm text-muted-foreground">API Keys</div>
                <div className="font-semibold">Manage programmatic access</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Key name (e.g., Production backend)" className="flex-1 h-10 px-3 rounded-lg bg-card border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"/>
              <button onClick={createKey} className="h-10 px-4 rounded-lg neural-gradient text-white">Create key</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="py-2">Name</th>
                    <th>Key</th>
                    <th>Created</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-muted-foreground">No API keys yet. Create one to get started.</td>
                    </tr>
                  )}
                  {keys.map((k, idx) => (
                    <tr key={k.id} className={idx % 2 ? "bg-card/40" : ""}>
                      <td className="py-3 font-medium">{k.name}</td>
                      <td className="font-mono text-xs">{mask(k.key)}</td>
                      <td>{new Date(k.createdAt).toLocaleString()}</td>
                      <td>
                        <div className="flex items-center justify-end gap-2">
                          <CopyButton value={k.key} labelCopied="Copied" />
                          <button onClick={() => removeKey(k.id)} className="h-8 px-3 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/10">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
