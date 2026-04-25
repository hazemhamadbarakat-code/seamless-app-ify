import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecoveryShell } from "@/components/RecoveryShell";
import { Icon } from "@/components/Icon";

const strengthLabel = (s: number) => ["Fragile", "Faded", "Tempered", "Forged", "Archive Grade"][s];

const RecoveryStep3 = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");

  const score = Math.min(
    4,
    (pwd.length >= 8 ? 1 : 0) +
      (/[A-Z]/.test(pwd) ? 1 : 0) +
      (/\d/.test(pwd) ? 1 : 0) +
      (/[^A-Za-z0-9]/.test(pwd) ? 1 : 0)
  );

  return (
    <RecoveryShell step={3} back="/recover/verify">
      <h2 className="font-serif text-3xl font-bold text-foreground text-center leading-tight">
        Secure Your<br />Heritage
      </h2>
      <p className="text-center text-muted-foreground mt-3 text-sm">
        Define a new entry key for your journey.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/login");
        }}
        className="mt-8 space-y-6"
      >
        <div className="relative">
          <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="New Password"
            required
            className="w-full pl-11 pr-3 pb-2 pt-1 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="relative">
          <Icon name="restart_alt" className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm New Password"
            required
            className="w-full pl-11 pr-3 pb-2 pt-1 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 flex-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full ${
                  i < score + 1 && pwd.length > 0 ? "bg-primary" : "bg-surface-high"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
            Strength: {strengthLabel(score)}
          </span>
        </div>

        <button
          type="submit"
          disabled={!pwd || pwd !== confirm}
          className="w-full py-4 rounded-full bg-primary text-primary-foreground font-serif font-bold glow-gold hover:bg-primary-glow transition-all active:scale-[0.98] disabled:opacity-40 disabled:glow-soft"
        >
          Update Gateway Key
        </button>

        <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80 text-center">
          <Icon name="shield" size={16} className="text-primary/60" />
          Your archive remains encrypted until successful re-entry.
        </p>
      </form>
      <Link
        to="/login"
        className="block mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
      >
        Return to Login
      </Link>
    </RecoveryShell>
  );
};

export default RecoveryStep3;
