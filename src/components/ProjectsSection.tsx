import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, FileCode, Server, Wrench } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "X-Network",
    role: "Founder",
    desc: "A cheating network for a wide range of games. Building and maintaining game cheats and tools at scale.",
    link: "https://x-network.lol",
    tags: ["Gaming", "Cheats", "Community"],
  },
  {
    icon: Globe,
    title: "Web Development",
    role: "Freelance",
    desc: "Designing and developing websites with modern frameworks and clean code.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: FileCode,
    title: "Greasyfork Scripts",
    role: "Author",
    desc: "Writing userscripts that enhance and modify web experiences for thousands of users.",
    tags: ["JavaScript", "Userscripts"],
  },
  {
    icon: Server,
    title: "Nebula & Proxy Servers",
    role: "Contributor",
    desc: "Contributing to open-source proxy server projects including Nebulo.",
    tags: ["Proxy", "Open Source", "Node.js"],
  },
  {
    icon: Wrench,
    title: "Game Reverse Engineering",
    role: "Researcher",
    desc: "Analyzing game binaries, protocols, and systems to understand inner workings.",
    tags: ["RE", "Analysis", "Security"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// projects</p>
        <h2 className="font-heading text-3xl font-bold mb-10 text-foreground">What I build</h2>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-border rounded-lg p-5 bg-card hover:border-primary/40 transition-colors group flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">
                    {p.role}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] text-primary/70 bg-primary/5 border border-primary/10 rounded px-1.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
