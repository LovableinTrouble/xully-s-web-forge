import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

export const AboutSection = () => {
  const items = [
    { icon: Code, label: "Web Dev", desc: "Building sleek sites and tools with React, TypeScript, and modern web tech." },
    { icon: Cpu, label: "Reverse Engineering", desc: "Tearing apart games and software to understand how they tick." },
    { icon: Globe, label: "Open Source", desc: "Contributing to proxy servers, userscripts, and community projects." },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// about</p>
          <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">Who I am</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-border rounded-lg p-5 bg-card hover:border-primary/40 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="font-heading text-sm font-semibold mb-1 text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
