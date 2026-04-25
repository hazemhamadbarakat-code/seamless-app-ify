import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";

interface RecoveryShellProps {
  step: 1 | 2 | 3;
  children: ReactNode;
  back?: string;
}

export const RecoveryShell = ({ step, children, back }: RecoveryShellProps) => {
  return (
    <div className="min-h-screen w-full bg-surface-dim flex justify-center">
      <div className="relative w-full max-w-[420px] min-h-screen bg-surface flex flex-col overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <header className="relative z-10 pt-8 pb-4 px-6">
          {back && (
            <Link
              to={back}
              className="absolute left-4 top-7 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-high/60 transition-colors"
              aria-label="Back"
            >
              <Icon name="arrow_back" size={24} />
            </Link>
          )}
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Icon name="history_edu" className="text-primary" size={26} />
              <h1 className="font-serif font-bold text-2xl text-primary tracking-[0.2em]">THAKIRA</h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Heritage Preserved</p>
          </div>
        </header>

        <div className="relative z-10 px-6 mt-6">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Step {step} of 3
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1 w-12 rounded-full transition-all ${
                  i <= step ? "bg-primary glow-soft" : "bg-surface-high"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex-1 px-5 pt-8 pb-10 page-enter">
          <div className="bg-surface-container/70 ghost-border rounded-[2rem] p-7 shadow-elevated">
            {children}
          </div>
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mt-6">
            Secure Access System — Archival Protocol v4.0
          </p>
        </div>
      </div>
    </div>
  );
};
