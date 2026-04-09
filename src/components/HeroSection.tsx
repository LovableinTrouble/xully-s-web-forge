import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(270 100% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(270 100% 65%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 text-xs text-muted-foreground">
          <Terminal className="w-3 h-3 text-primary" />
          <span>13 &bull; canada &bull; probably breaking something rn</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-8xl font-bold tracking-tight mb-4">
          <span className="text-foreground">xu</span>
          <span className="text-primary text-glow">llys</span>
        </h1>

        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mb-4">
          hey im xullys. i make websites, hack games, write scripts, and reverse engineer stuff for fun. 
          been coding since i was like 10 and honestly i dont plan on stopping anytime soon lol
        </p>
        <p className="text-xs text-muted-foreground/60 mb-8">
          if its on the internet, i've probably tried to break it
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider hover:shadow-[var(--glow-primary)] transition-shadow"
          >
            my stuff ↓
          </a>
          <a
            href="https://x-network.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            X-Network →
          </a>
        </div>
      </motion.div>
    </section>
  );
};
