import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";
import olive from "@/assets/olive-grove.jpg";
import artisan from "@/assets/artisan-linework.jpg";
import family from "@/assets/family-archive.jpg";

const filters = ["All", "Heritage", "Cultural", "Archival"] as const;

const unlocked = [
  { title: "The Olive Groves", img: olive, progress: 100 },
  { title: "Artisan Linework", img: artisan, progress: 80 },
  { title: "Family Archive", img: family, progress: 100 },
];

const HeritageCollection = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  return (
    <AppShell>
      <section className="px-6 pt-2 pb-6">
        <h1 className="font-serif font-bold text-foreground text-[2.5rem] leading-[1.05]">
          My Heritage<br />Collection
        </h1>
        <p className="text-muted-foreground text-sm mt-3">
          Documenting the legacy of generations past.
        </p>
      </section>

      <section className="px-6 mb-6">
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-surface-container ghost-border">
          <Icon name="military_tech" filled className="text-primary" size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            12 / 24 Badges Earned
          </span>
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground glow-soft"
                  : "bg-surface-container text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-x-4 gap-y-7">
          {unlocked.map((u) => (
            <div key={u.title} className="flex flex-col items-center text-center">
              <div className="w-full h-1 rounded-full bg-surface-high overflow-hidden mb-2">
                <div className="h-full bg-primary glow-soft" style={{ width: `${u.progress}%` }} />
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden ghost-border bg-surface-high">
                <img src={u.img} alt={u.title} loading="lazy" className="w-full h-full object-cover" />
                <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-soft hover:bg-primary-glow">
                  <Icon name="ios_share" size={14} />
                </button>
              </div>
              <p className="font-serif text-sm text-foreground mt-2">{u.title}</p>
            </div>
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full h-1 rounded-full bg-surface-high mb-2" />
              <div className="w-24 h-24 rounded-full bg-surface-high/60 ghost-border flex items-center justify-center text-muted-foreground/40">
                <Icon name="lock" filled size={28} />
              </div>
              <p className="text-xs text-muted-foreground/60 mt-2 uppercase tracking-widest">Locked</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
};

export default HeritageCollection;
