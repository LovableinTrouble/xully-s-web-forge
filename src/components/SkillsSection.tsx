import { motion } from "framer-motion";
import { Braces, Code2, Atom, Palette, HardDrive, Crosshair, Egg, Wifi } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 95, icon: Braces, accent: "from-yellow-400/80 to-yellow-600/80" },
  { name: "TypeScript", level: 90, icon: Code2, accent: "from-blue-400/80 to-blue-600/80" },
  { name: "React", level: 85, icon: Atom, accent: "from-cyan-400/80 to-cyan-500/80" },
  { name: "HTML / CSS", level: 90, icon: Palette, accent: "from-orange-400/80 to-pink-500/80" },
  { name: "Node.js", level: 75, icon: HardDrive, accent: "from-green-400/80 to-emerald-600/80" },
  { name: "Reverse Engineering", level: 80, icon: Crosshair, accent: "from-red-400/80 to-rose-600/80" },
  { name: "Python", level: 60, icon: Egg, accent: "from-sky-400/80 to-indigo-500/80" },
  { name: "Networking / Proxies", level: 70, icon: Wifi, accent: "from-violet-400/80 to-purple-600/80" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// skills</p>
          <h2 className="font-heading text-4xl font-bold mb-3 text-foreground">what i know</h2>
          <p className="text-xs text-muted-foreground mb-12">
            these are rough estimates lol. im always learning new stuff so this changes a lot
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              className="space-y-2.5 group cursor-default"
            >
              <div className="flex justify-between text-xs items-center">
                <span className="text-foreground font-medium flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {skill.name}
                </span>
                <motion.span
                  className="text-muted-foreground tabular-nums font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                  style={{ boxShadow: "var(--glow-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
