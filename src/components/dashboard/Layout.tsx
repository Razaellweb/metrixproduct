import { PropsWithChildren, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div data-dashboard="true" className="min-h-screen bg-background text-foreground">
      <div className="grid grid-cols-12">
        <aside className="hidden md:block md:col-span-2 lg:col-span-2 xl:col-span-2 border-r border-border/50">
          <Sidebar />
        </aside>
        <main className="col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-10">
          <Header />
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
