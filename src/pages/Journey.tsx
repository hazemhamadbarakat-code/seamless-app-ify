import { useState } from "react";
import { Link } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";
import jaffa from "@/assets/jaffa-orange-groves.jpg";
import olive from "@/assets/olive-grove.jpg";
import family from "@/assets/family-archive.jpg";

const years = [
  { year: "1936", title: "Mandate Era Letters", img: family, place: "Haifa" },
  { year: "1948", title: "The Orange Groves of Jaffa", img: jaffa, place: "Jaffa District" },
  { year: "1967", title: "Olive Harvest Witness", img: olive, place: "Galilee" },
];

const Journey = () => {
  const [active, setActive] = useState(1);
  const item = years[active];

  return (
    <AppShell title="Historical Journey">
      <section className="px-6 pt-4">
        {/* Timeline */}
        <div className="relative py-3 mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2" />
          <div className="relative flex justify-between items-center">
            {years.map((y, i) => (
              <button
                key={y.year}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2 group"
              >
                <span
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                    i === active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {y.year}
                </span>
                <span
                  className={`rounded-full transition-all ${
                    i === active
                      ? "w-5 h-5 bg-primary glow-gold border-2 border-surface"
                      : "w-3 h-3 bg-surface-high border border-border group-hover:bg-surface-bright"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <article className="bg-surface-container ghost-border rounded-[2rem] p-6 shadow-elevated">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            {item.year} • {item.place}
          </p>
          <h2 className="font-serif font-bold text-foreground text-3xl leading-tight mb-5">
            {item.title}
          </h2>
          <div className="rounded-[1.5rem] overflow-hidden ghost-border">
            <img
              src={item.img}
              alt={`${item.title} archival photograph`}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          <blockquote className="mt-5 pl-4 border-l-2 border-primary/60 text-sm italic text-muted-foreground leading-relaxed">
            "A significant memory in the city's history, preserved through the scent of citrus and the
            weight of ancestral keys."
          </blockquote>

          <div className="flex items-center justify-between mt-6">
            <Link
              to="/submissions"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold hover:text-primary-glow"
            >
              Read Archive <Icon name="arrow_forward" size={16} />
            </Link>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-surface-high text-muted-foreground hover:text-primary flex items-center justify-center" aria-label="Share">
                <Icon name="ios_share" size={18} />
              </button>
              <Link
                to="/contribute"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground glow-gold flex items-center justify-center hover:bg-primary-glow transition-colors"
                aria-label="Add memory"
              >
                <Icon name="add" size={26} />
              </Link>
            </div>
          </div>
        </article>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 mt-5 mb-8">
          <div className="rounded-2xl p-4 bg-surface-container ghost-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Preservation Status
            </p>
            <p className="text-sm text-foreground mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary glow-soft" />
              Digital Archive Verified
            </p>
          </div>
          <div className="rounded-2xl p-4 bg-surface-container ghost-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Location Context
            </p>
            <p className="text-sm text-foreground mt-2 flex items-center gap-2">
              <Icon name="location_on" filled className="text-primary" size={16} />
              {item.place}
            </p>
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Journey;
