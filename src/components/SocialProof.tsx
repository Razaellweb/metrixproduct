import React from 'react';

const LogoMark = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <div className="h-6 w-6 rounded-md bg-muted" />
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

const SocialProof = () => {
  const brands = ['AtlasCorp', 'NebulaSoft', 'QuantumIO', 'DeepSignal', 'ForgeLabs'];
  return (
    <section aria-label="Trusted by" className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">Trusted by security‑first engineering teams</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full md:w-auto">
            {brands.map((b) => (
              <LogoMark key={b} label={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;