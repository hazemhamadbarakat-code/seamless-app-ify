import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { Icon } from "@/components/Icon";
import { toast } from "sonner";

const Contribute = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  return (
    <AppShell title="THAKIRA" rightAction={
      <button className="w-10 h-10 rounded-full hover:bg-surface-high/60 flex items-center justify-center text-primary" aria-label="Search">
        <Icon name="search" size={22} />
      </button>
    }>
      <section className="px-6 pt-4">
        <h1 className="font-serif font-bold text-primary text-[2.5rem] leading-[1.05]">
          Contribute a<br />Memory
        </h1>
        <p className="text-muted-foreground text-sm mt-3">Share your story with the world.</p>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Memory submitted to the Archive");
          navigate("/submissions");
        }}
        className="px-6 pt-8 space-y-6"
      >
        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-2 font-semibold">
            Story Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g., Grandfather's Olive Grove, 1946"
            className="w-full px-5 py-4 rounded-2xl bg-surface-container ghost-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-2 font-semibold">
            Story Narrative
          </label>
          <div className="relative">
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value.slice(0, 2000))}
              placeholder="Begin your story here..."
              rows={7}
              className="w-full px-5 py-4 rounded-2xl bg-surface-container ghost-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
            />
            <span className="absolute bottom-3 right-4 text-[11px] text-muted-foreground">
              {story.length} / 2000
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-serif font-bold text-primary text-xl mb-3">Attach Your Memory</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex flex-col items-center gap-2 p-6 rounded-[1.5rem] bg-surface-container ghost-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-soft">
                <Icon name="photo_camera" filled size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Photo / Video</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-2 p-6 rounded-[1.5rem] bg-surface-container ghost-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-soft">
                <Icon name="mic" filled size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Audio File</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg glow-gold hover:bg-primary-glow active:scale-[0.98] transition-all"
        >
          Submit to Collection
        </button>

        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 text-center leading-relaxed pb-6">
          By submitting, you agree to preserve this memory in the digital archive for future generations.
        </p>
      </form>
    </AppShell>
  );
};

export default Contribute;
