import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-10 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} xullys
        </p>
        <div className="flex gap-5 text-xs">
          <a href="https://x-network.lol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            X-Network
          </a>
          <a href="https://greasyfork.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            Greasyfork
          </a>
        </div>
      </motion.div>
    </footer>
  );
};
