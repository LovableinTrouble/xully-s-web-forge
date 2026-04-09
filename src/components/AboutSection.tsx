import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const AboutSection = () => {
  const items = [
    { icon: Code, label: "Web Dev", desc: "i build websites and web apps mostly with react & typescript. its what i do the most tbh, i just really like making stuff look cool and work well" },
    { icon: Cpu, label: "Game Hacking & RE", desc: "i love taking apart games to see how they work under the hood. finding exploits and understanding game internals is genuinely so fun to me" },
    { icon: Globe, label: "Open Source", desc: "i contribute to proxy servers like nebulo and post userscripts on greasyfork. sharing code with people is cool and i learn a ton from it" },
  ];

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// about me</p>
          <h2 className="font-heading text-4xl font-bold mb-3 text-foreground">who is xullys</h2>
          <p className="text-xs text-muted-foreground mb-10 max-w-xl leading-relaxed">
            im a 13 year old dev from canada. i spend most of my time coding, hacking games, 
            and working on random projects that i think are cool. i also founded x-network which is a game cheating community. 
            yeah im young but ive been doing this for a while now lol
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all duration-300 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
