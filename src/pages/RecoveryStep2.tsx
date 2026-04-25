import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecoveryShell } from "@/components/RecoveryShell";
import { Icon } from "@/components/Icon";

const RecoveryStep2 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const update = (i: number, v: string) => {
    const ch = v.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = ch;
    setCode(next);
    if (ch && i < 5) refs.current[i + 1]?.focus();
  };

  return (
    <RecoveryShell step={2} back="/recover">
      <div className="flex justify-center mb-4">
        <Icon name="history_edu" className="text-primary" size={42} />
      </div>
      <h2 className="font-serif text-3xl font-bold text-foreground text-center leading-tight">
        Check Your<br />Email
      </h2>
      <p className="text-center text-muted-foreground mt-3 text-sm">
        A six-digit memory has been sent to your email. Enter it below to unlock access.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/recover/reset");
        }}
        className="mt-7 space-y-6"
      >
        <div className="flex justify-between gap-2">
          {code.map((c, i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              value={c}
              onChange={(e) => update(i, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !c && i > 0) refs.current[i - 1]?.focus();
              }}
              inputMode="numeric"
              maxLength={1}
              aria-label={`Digit ${i + 1}`}
              className="w-12 h-14 text-center text-xl font-serif font-bold rounded-2xl bg-surface-high/60 ghost-border text-primary focus:outline-none focus:ring-2 focus:ring-primary/70 transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-primary text-primary-foreground font-serif font-bold glow-gold hover:bg-primary-glow transition-all active:scale-[0.98]"
        >
          Verify Memory
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 mx-auto text-xs uppercase tracking-[0.25em] text-primary hover:text-primary-glow transition-colors"
        >
          <Icon name="refresh" size={16} />
          Resend Code
        </button>

        <div className="gold-divider" />
        <Link
          to="/login"
          className="block text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          Return to Archives
        </Link>
      </form>
    </RecoveryShell>
  );
};

export default RecoveryStep2;
