import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-heading text-lg font-bold text-primary text-glow">
          xullys<span className="animate-blink">_</span>
        </a>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          {["about", "projects", "skills", "socials"].map((s, i) => (
            <motion.a
              key={s}
              href={`#${s}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {s}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
