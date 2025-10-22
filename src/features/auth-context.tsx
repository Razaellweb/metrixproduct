import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, Role, User } from "./types";

interface AuthContextShape {
  user: User | null;
  loading: boolean;
  signin: (email: string, _password: string, role: Role) => Promise<void>;
  signup: (email: string, _password: string, role: Role) => Promise<void>;
  signout: () => Promise<void>;
  setLocale: (locale: Locale) => void;
}

const AuthContext = createContext<AuthContextShape | null>(null);

function randomKey() {
  return `mx_${Math.random().toString(36).slice(2)}_${crypto.getRandomValues(new Uint32Array(1))[0].toString(36)}`;
}

const STORAGE_KEY = "metrix_auth_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  async function signin(email: string, _password: string, role: Role) {
    await new Promise(r => setTimeout(r, 500));
    setUser({ id: crypto.randomUUID(), email, name: email.split("@")[0], role, apiKey: randomKey(), locale: "en" });
  }

  async function signup(email: string, _password: string, role: Role) {
    await new Promise(r => setTimeout(r, 700));
    setUser({ id: crypto.randomUUID(), email, name: email.split("@")[0], role, apiKey: randomKey(), locale: "en" });
  }

  async function signout() {
    await new Promise(r => setTimeout(r, 200));
    setUser(null);
  }

  function setLocale(locale: Locale) {
    if (user) setUser({ ...user, locale });
  }

  const value = useMemo(() => ({ user, loading, signin, signup, signout, setLocale }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
