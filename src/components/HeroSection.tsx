import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.webp";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(270 100% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(270 100% 65%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="text-center relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8 text-xs text-muted-foreground"
        >
          <Terminal className="w-3 h-3 text-primary" />
          <span>13 &bull; canada &bull; hacking stuff since 2021</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-7xl sm:text-9xl font-bold tracking-tighter mb-6"
        >
          <span className="text-foreground">xu</span>
          <span className="text-primary text-glow">llys</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mb-3"
        >
          hey im xullys — i make websites, hack games, write scripts, and reverse engineer stuff for fun. 
          been coding since i was like 10 and honestly i dont plan on stopping anytime soon lol
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs text-muted-foreground/50 mb-10"
        >
          web dev • game hacking • reverse engineering • open source
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:shadow-[var(--glow-strong)] transition-all duration-300 hover-scale"
          >
            my projects ↓
          </a>
          <a
            href="https://x-network.lol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover-scale"
          >
            X-Network →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block text-muted-foreground/30 hover:text-primary transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
