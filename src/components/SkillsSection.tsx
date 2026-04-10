import { motion } from "framer-motion";
import { FileCode2, FileType, Blocks, Paintbrush, Server, Shield, Terminal, Network } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 95, icon: FileCode2 },
  { name: "TypeScript", level: 90, icon: FileType },
  { name: "React", level: 85, icon: Blocks },
  { name: "HTML / CSS", level: 90, icon: Paintbrush },
  { name: "Node.js", level: 75, icon: Server },
  { name: "Reverse Engineering", level: 80, icon: Shield },
  { name: "Python", level: 60, icon: Terminal },
  { name: "Networking / Proxies", level: 70, icon: Network },
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

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-xs">
                <span className="text-foreground font-medium flex items-center gap-1.5">
                  <skill.icon className="w-3 h-3 text-primary" />
                  {skill.name}
                </span>
                <motion.span
                  className="text-muted-foreground tabular-nums"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
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
