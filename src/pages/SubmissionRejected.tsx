import { Link } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";
import jaffa from "@/assets/jaffa-orange-groves.jpg";

const SubmissionRejected = () => {
  return (
    <AppShell
      customHeader={
        <header className="relative z-30 flex items-center justify-between px-5 py-4">
          <div>
            <p className="font-serif font-bold text-primary tracking-[0.2em] text-sm">THAKIRA</p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Heritage Preserved</p>
          </div>
          <h2 className="font-serif font-bold text-primary text-xl">Submission Update</h2>
          <Link to="/profile">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ghost-border flex items-center justify-center">
              <Icon name="person" filled className="text-primary" size={18} />
            </div>
          </Link>
        </header>
      }
    >
      <section className="px-5 pt-3">
        <article className="bg-surface-container ghost-border rounded-[1.75rem] p-5 shadow-elevated">
          <div className="flex items-start justify-between mb-3">
            <h1 className="font-serif font-bold text-foreground text-2xl leading-tight max-w-[18ch]">
              The Orange Groves of Jaffa
            </h1>
            <span className="shrink-0 px-3 py-1 rounded-full bg-crimson text-destructive-foreground text-[11px] font-bold uppercase tracking-widest glow-crimson">
              Rejected
            </span>
          </div>
          <div className="relative rounded-2xl overflow-hidden ghost-border">
            <img
              src={jaffa}
              alt="Submitted photo"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-foreground">
                <Icon name="close" size={32} />
              </div>
            </div>
          </div>
        </article>

        <div className="mt-7">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="history_edu" className="text-primary" size={22} />
            <h2 className="font-serif font-bold text-primary text-xl">Admin Feedback</h2>
          </div>
          <div className="rounded-[1.5rem] bg-surface-container ghost-border p-5 border-l-2 border-l-primary/60">
            <p className="text-foreground italic leading-relaxed text-sm">
              "This story is excellent, but please provide a high-resolution version of the photo for archive
              quality."
            </p>
          </div>
        </div>

        <Link
          to="/contribute"
          className="mt-8 flex items-center justify-center gap-3 py-4 rounded-full bg-crimson text-destructive-foreground font-bold uppercase tracking-[0.2em] text-sm glow-crimson hover:opacity-90 transition-all"
        >
          <Icon name="edit" size={20} />
          Edit and Resubmit
        </Link>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-4 mb-8">
          Submission Ref: #AF-992-01
        </p>
      </section>
    </AppShell>
  );
};

export default SubmissionRejected;
