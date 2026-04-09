import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

export const AboutSection = () => {
  const items = [
    { icon: Code, label: "Web Dev", desc: "i build websites and web apps mostly with react & typescript. its what i do the most tbh, i just really like making stuff look cool and work well" },
    { icon: Cpu, label: "Reverse Engineering", desc: "i love tearing apart games to see how they work. finding out how stuff runs under the hood is genuinely so fun to me, even if it takes forever sometimes" },
    { icon: Globe, label: "Open Source", desc: "i contribute to proxy servers like nebulo and post userscripts on greasyfork. sharing code with people is cool and i learn a ton from it" },
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
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// about me</p>
          <h2 className="font-heading text-3xl font-bold mb-3 text-foreground">who is xullys</h2>
          <p className="text-xs text-muted-foreground mb-8 max-w-xl leading-relaxed">
            im a 13 year old dev from canada. i spend most of my time coding, reverse engineering games, 
            and working on random projects that i think are cool. i also founded x-network which is a game cheating community. 
            yeah im young but ive been doing this for a while now lol
          </p>

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
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-heading text-sm font-semibold mb-1.5 text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
