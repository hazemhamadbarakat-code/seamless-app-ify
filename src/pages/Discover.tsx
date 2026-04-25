import { Link } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";
import jaffa from "@/assets/jaffa-orange-groves.jpg";
import olive from "@/assets/olive-grove.jpg";
import artisan from "@/assets/artisan-linework.jpg";

const featured = [
  {
    title: "The Orange Groves of Jaffa",
    region: "Jaffa District • 1948",
    img: jaffa,
    href: "/journey",
  },
  {
    title: "Ancient Olive Witnesses",
    region: "Galilee • Heritage",
    img: olive,
    href: "/saved",
  },
  {
    title: "Tatreez & Threadwork",
    region: "Cultural Archive",
    img: artisan,
    href: "/saved",
  },
];

const tiles = [
  { to: "/journey", icon: "history_edu", label: "Historical Journey" },
  { to: "/contribute", icon: "add_circle", label: "Contribute Memory" },
  { to: "/quiz", icon: "quiz", label: "Heritage Quiz" },
  { to: "/daleel", icon: "auto_awesome", label: "Ask Daleel" },
  { to: "/vr", icon: "view_in_ar", label: "VR Immersion" },
  { to: "/saved", icon: "bookmarks", label: "My Collection" },
];

const Discover = () => {
  return (
    <AppShell>
      <section className="px-6 pt-2 pb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Marhaba, Storyteller
        </p>
        <h1 className="font-serif font-bold text-foreground text-[2.5rem] leading-[1.05]">
          Discover the<br />
          <span className="text-primary text-shadow-gold">Living Archive</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-3 max-w-[28ch]">
          Explore stories, traditions, and memories preserved by generations.
        </p>
      </section>

      {/* Featured carousel */}
      <section className="pl-6 mb-10">
        <div className="flex items-center justify-between pr-6 mb-4">
          <h2 className="font-serif text-xl text-foreground">Featured Archives</h2>
          <Link to="/saved" className="text-xs uppercase tracking-[0.2em] text-primary hover:text-primary-glow">
            View All
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pr-6 pb-3 -mx-1 px-1">
          {featured.map((f) => (
            <Link
              to={f.href}
              key={f.title}
              className="group shrink-0 w-[240px] rounded-[1.75rem] overflow-hidden bg-surface-container ghost-border shadow-elevated transition-transform hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">{f.region}</p>
                <h3 className="font-serif text-base text-foreground leading-tight">{f.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tile grid */}
      <section className="px-6 mb-10">
        <h2 className="font-serif text-xl text-foreground mb-4">Quick Threads</h2>
        <div className="grid grid-cols-2 gap-3">
          {tiles.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group flex flex-col gap-3 p-5 rounded-[1.5rem] bg-surface-container/80 ghost-border hover:border-primary/50 hover:bg-surface-high/60 transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-soft transition-all">
                <Icon name={t.icon} filled size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Open</p>
                <p className="font-serif text-base text-foreground leading-tight">{t.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Submissions banner */}
      <section className="px-6 mb-6">
        <Link
          to="/submissions"
          className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-surface-container ghost-border hover:border-primary/40 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center">
            <Icon name="schedule" filled size={24} />
          </div>
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary">Pending Review</p>
            <p className="font-serif text-foreground">The Orange Groves of Jaffa</p>
          </div>
          <Icon name="chevron_right" className="text-muted-foreground" />
        </Link>
      </section>
    </AppShell>
  );
};

export default Discover;
