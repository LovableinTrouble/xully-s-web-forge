import { motion } from "framer-motion";

const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "Reverse Engineering", level: 80 },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// skills</p>
        <h2 className="font-heading text-3xl font-bold mb-10 text-foreground">Tech stack</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="space-y-1.5"
            >
              <div className="flex justify-between text-xs">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
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
