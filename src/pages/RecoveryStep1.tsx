import { Link, useNavigate } from "react-router-dom";
import { RecoveryShell } from "@/components/RecoveryShell";
import { Icon } from "@/components/Icon";

const RecoveryStep1 = () => {
  const navigate = useNavigate();
  return (
    <RecoveryShell step={1} back="/login">
      <h2 className="font-serif text-3xl font-bold text-foreground text-center leading-tight">
        Reset Your<br />Gateway
      </h2>
      <p className="text-center text-muted-foreground mt-3 text-sm">
        Enter the email associated with your heritage.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/recover/verify");
        }}
        className="mt-8 space-y-6"
      >
        <div className="relative">
          <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
          <input
            type="email"
            required
            placeholder="your@heritage.email"
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface-high/60 ghost-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground font-serif font-bold glow-gold hover:bg-primary-glow transition-all active:scale-[0.98]"
        >
          Send Verification Code
          <Icon name="arrow_forward" size={20} />
        </button>

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" size={16} />
          Back to Portal
        </Link>
      </form>
    </RecoveryShell>
  );
};

export default RecoveryStep1;
