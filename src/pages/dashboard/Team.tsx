import { DashboardLayout } from "@/components/dashboard/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useAuth } from "@/features/auth-context";
import { Role } from "@/features/types";
import { useEffect, useMemo, useState } from "react";
import { toast } from "@/components/ui/sonner";

interface Member { id: string; name: string; email: string; role: Role; }

export default function Team() {
  const { user } = useAuth();
  const storageKey = useMemo(() => `metrix_team_${user?.id ?? 'anon'}`,[user?.id]);
  const [members, setMembers] = useState<Member[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>('Developer');

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      try { setMembers(JSON.parse(raw)); } catch {}
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(members));
  }, [members, storageKey]);

  function addMember() {
    if (!name.trim() || !email.trim()) { toast.error('Enter name and email'); return; }
    const m: Member = { id: crypto.randomUUID(), name: name.trim(), email: email.trim(), role };
    setMembers((prev) => [m, ...prev]);
    setName(""); setEmail(""); setRole('Developer');
    toast.success('Member added');
  }

  function removeMember(id: string) { setMembers((prev) => prev.filter(m => m.id !== id)); toast.success('Member removed'); }

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold">Manage access to your account</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-2 mb-4">
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="h-10 px-3 rounded-lg bg-card border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"/>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="h-10 px-3 rounded-lg bg-card border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"/>
              <select value={role} onChange={(e)=>setRole(e.target.value as Role)} className="h-10 px-3 rounded-lg bg-card border border-border/60">
                <option>Developer</option>
                <option>Product Manager</option>
                <option>Finance Team</option>
              </select>
              <button onClick={addMember} className="h-10 px-4 rounded-lg neural-gradient text-white">Add member</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="py-2">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-muted-foreground">No team members yet.</td>
                    </tr>
                  )}
                  {members.map((m, idx) => (
                    <tr key={m.id} className={idx % 2 ? "bg-card/40" : ""}>
                      <td className="py-3 font-medium">{m.name}</td>
                      <td>{m.email}</td>
                      <td>{m.role}</td>
                      <td>
                        <div className="flex items-center justify-end">
                          <button onClick={() => removeMember(m.id)} className="h-8 px-3 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/10">Remove</button>
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
