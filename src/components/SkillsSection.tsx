import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "HTML / CSS", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "Reverse Engineering", level: 80 },
  { name: "Python", level: 60 },
  { name: "Networking / Proxies", level: 70 },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// skills</p>
        <h2 className="font-heading text-3xl font-bold mb-3 text-foreground">what i know</h2>
        <p className="text-xs text-muted-foreground mb-10">
          these are rough estimates lol. im always learning new stuff so this changes a lot
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
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
                  transition={{ delay: i * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
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
