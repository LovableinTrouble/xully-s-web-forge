import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, FileCode, Server, Wrench } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "X-Network",
    role: "Founder",
    desc: "this is my biggest project. its a huge cheating network for a ton of different games. i help develop the cheats and manage the whole thing. we have a pretty big community and its still growing which is sick",
    link: "https://x-network.lol",
    tags: ["Gaming", "Cheats", "Community"],
  },
  {
    icon: Globe,
    title: "Web Development",
    role: "What I Do Most",
    desc: "i make websites for fun and sometimes for other people too. react + typescript is my go-to but i can do pretty much anything web related. i just like making things from scratch",
    tags: ["React", "TypeScript", "HTML/CSS"],
  },
  {
    icon: FileCode,
    title: "Greasyfork Userscripts",
    role: "Author",
    desc: "i write userscripts that modify how websites work. some of them are just quality of life things, some are more advanced. its a fun way to hack the web without building a whole extension",
    tags: ["JavaScript", "Userscripts", "Tampermonkey"],
  },
  {
    icon: Server,
    title: "Nebulo & Proxy Servers",
    role: "Contributor",
    desc: "i contribute to a bunch of open source proxy server projects including nebulo. proxy stuff is interesting because theres a lot of networking and problem solving involved",
    tags: ["Proxy", "Open Source", "Node.js"],
  },
  {
    icon: Wrench,
    title: "Game Reverse Engineering",
    role: "For Fun",
    desc: "probably my favorite thing to do honestly. i take apart games to figure out how they work — looking at memory, protocols, binaries. its like solving a puzzle except the puzzle really doesnt want you to solve it",
    tags: ["RE", "Memory", "Game Hacking"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// projects</p>
          <h2 className="font-heading text-4xl font-bold mb-3 text-foreground">stuff i work on</h2>
          <p className="text-xs text-muted-foreground mb-12">
            heres the main things i spend my time on. theres more smaller stuff but these are the big ones
          </p>
        </motion.div>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-primary/60 border border-primary/15 rounded-full px-2 py-0.5 bg-primary/5">
                      {p.role}
                    </span>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors ml-auto hover-scale"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
