import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, FileCode, Server, Wrench } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "X-Network",
    role: "Founder",
    desc: "this is my biggest project. its basically a huge cheating network for a ton of different games. i help develop the cheats and manage the whole thing. we have a pretty big community at this point and its still growing which is sick",
    link: "https://x-network.lol",
    tags: ["Gaming", "Cheats", "Community"],
  },
  {
    icon: Globe,
    title: "Web Development",
    role: "What I Do Most",
    desc: "i make websites for fun and sometimes for other people too. react + typescript is my go-to but i can do pretty much anything web related. i just like making things from scratch and seeing them come together",
    tags: ["React", "TypeScript", "HTML/CSS"],
  },
  {
    icon: FileCode,
    title: "Greasyfork Userscripts",
    role: "Author",
    desc: "i write userscripts that modify how websites work. some of them are just quality of life things, some are more advanced. its a fun way to mess with the web without building a whole extension",
    tags: ["JavaScript", "Userscripts", "Tampermonkey"],
  },
  {
    icon: Server,
    title: "Nebulo & Proxy Servers",
    role: "Contributor",
    desc: "i contribute to a bunch of open source proxy server projects including nebulo. proxy stuff is interesting to me because theres a lot of networking and problem solving involved",
    tags: ["Proxy", "Open Source", "Node.js"],
  },
  {
    icon: Wrench,
    title: "Game Reverse Engineering",
    role: "For Fun",
    desc: "this is probably my favorite thing to do honestly. i take apart games to figure out how they work — looking at memory, protocols, binaries, all that. its like solving a puzzle except the puzzle doesnt want to be solved",
    tags: ["RE", "Memory", "Analysis"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// projects</p>
        <h2 className="font-heading text-3xl font-bold mb-3 text-foreground">stuff i work on</h2>
        <p className="text-xs text-muted-foreground mb-10">
          heres some of the main things i spend my time on. theres a lot more smaller stuff but these are the big ones
        </p>

        <div className="space-y-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-border rounded-lg p-5 bg-card hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-heading text-sm font-semibold text-foreground">{p.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">
                      {p.role}
                    </span>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors ml-auto"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] text-primary/70 bg-primary/5 border border-primary/10 rounded px-1.5 py-0.5">
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
