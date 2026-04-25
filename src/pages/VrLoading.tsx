import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";

const VrLoading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 4));
    }, 220);
    return () => clearInterval(t);
  }, []);

  return (
    <AppShell topBar={false}>
      <section className="px-6 pt-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary italic font-semibold">
          THAKIRA / HERITAGE PRESERVED
        </p>
        <h1 className="font-serif font-bold text-primary text-4xl mt-2">VR Immersion</h1>
      </section>

      <section className="px-6 pt-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Active Archive</p>
        <p className="font-serif text-foreground text-2xl mt-2">The Orange Groves of Jaffa</p>
      </section>

      {/* Concentric rings */}
      <div className="relative mx-auto my-10 w-[280px] h-[280px] flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-primary/40"
            style={{
              width: `${i * 90}px`,
              height: `${i * 90}px`,
              animation: `aura ${2 + i}s ease-in-out infinite`,
            }}
          />
        ))}
        <div className="relative w-32 h-32 rounded-full bg-surface-container ghost-border flex items-center justify-center glow-gold aura">
          <Icon name="headphones" filled className="text-primary" size={56} />
        </div>
      </div>

      <section className="px-8 text-center">
        <h2 className="font-serif text-primary text-xl">Preparing your immersive heritage experience</h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Our Heritage Authority is authenticating the data for simulation.
        </p>
        <div className="mt-6">
          <div className="h-2 w-full rounded-full bg-surface-high overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-glow to-primary glow-soft transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-[11px] italic uppercase tracking-[0.25em] text-muted-foreground">
            Initializing simulation...
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-7 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-serif font-bold glow-gold hover:bg-primary-glow active:scale-[0.98] transition-all"
        >
          <Icon name="close" size={20} />
          Cancel VR Session
        </button>

        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 mt-8 leading-relaxed pb-8">
          By entering, you agree to respect the authenticity of the simulation for future generations.
        </p>
      </section>
    </AppShell>
  );
};

export default VrLoading;
