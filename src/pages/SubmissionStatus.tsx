import { Link } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";

const SubmissionStatus = () => {
  return (
    <AppShell
      customHeader={
        <header className="relative z-30 flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <Icon name="account_balance" filled className="text-primary" size={22} />
            <h1 className="font-serif font-bold text-primary tracking-wider">
              Thakira <span className="text-foreground/70 font-normal">/ Heritage Preserved</span>
            </h1>
          </div>
          <button className="w-9 h-9 rounded-full bg-surface-high flex items-center justify-center text-foreground" aria-label="More">
            <Icon name="more_vert" size={18} />
          </button>
        </header>
      }
    >
      <section className="px-6 pt-2">
        <h1 className="font-serif font-bold text-primary text-[2.75rem] text-center leading-tight">
          Submission<br />Status
        </h1>
        <div className="mx-auto mt-3 h-px w-16 bg-primary/60" />

        <article className="mt-8 rounded-[1.75rem] overflow-hidden bg-surface-container ghost-border shadow-elevated">
          <div className="relative h-44 bg-surface-high overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-high via-surface to-surface-low blur-sm opacity-80" />
            <span className="absolute top-4 right-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest glow-soft">
              <Icon name="more_horiz" size={14} /> Pending Review
            </span>
          </div>
          <div className="p-5">
            <h2 className="font-serif font-bold text-foreground text-2xl leading-snug">
              The Orange Groves of Jaffa
            </h2>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              My grandfather always described the scent of the blossoms as something that lived in the air
              itself, thick and sweet like honeyed tea...
            </p>
            <div className="gold-divider my-5" />
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                  <Icon name="history_edu" size={14} />
                </span>
                Family Memoir
              </span>
              <span className="text-muted-foreground">ID #ARK-2024-X9</span>
            </div>
          </div>
        </article>

        <div className="flex flex-col items-center mt-8">
          <div className="w-12 h-12 rounded-full bg-surface-container ghost-border flex items-center justify-center text-primary">
            <Icon name="schedule" filled size={22} />
          </div>
          <p className="text-primary mt-3 text-sm">Submitted on May 24, 2024</p>
          <h3 className="font-serif text-foreground text-2xl text-center mt-2 leading-snug max-w-[24ch]">
            Our Heritage Authority is carefully reviewing your memory.
          </h3>
          <p className="text-xs text-muted-foreground mt-3">Please allow up to 48 hours for confirmation.</p>
        </div>

        <div className="flex flex-col gap-3 mt-8 mb-10">
          <button className="w-full py-3.5 rounded-full text-sm uppercase tracking-[0.25em] text-crimson border border-crimson/40 hover:bg-crimson/10 transition-colors">
            Cancel Submission
          </button>
          <Link to="/submissions/rejected" className="text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
            View rejected example →
          </Link>
        </div>
      </section>
    </AppShell>
  );
};

export default SubmissionStatus;
