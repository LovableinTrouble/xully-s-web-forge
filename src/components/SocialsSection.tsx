import { motion } from "framer-motion";
import { Headset, Clapperboard, Crown } from "lucide-react";

const socials = [
  {
    icon: Headset,
    label: "Discord",
    value: "xullysfr",
    link: "https://discord.com/users/xullysfr",
    color: "from-[#5865F2]/20 to-[#5865F2]/5",
  },
  {
    icon: Clapperboard,
    label: "TikTok",
    value: "@xullys_fn",
    link: "https://tiktok.com/@xullys_fn",
    color: "from-[#ff0050]/20 to-[#00f2ea]/5",
  },
  {
    icon: Crown,
    label: "Discord Server",
    value: "join the server",
    link: "https://discord.gg/ZrvQpbDF",
    color: "from-primary/20 to-primary/5",
  },
];

export const SocialsSection = () => {
  return (
    <section id="socials" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">// socials</p>
          <h2 className="font-heading text-4xl font-bold mb-3 text-foreground">find me here</h2>
          <p className="text-xs text-muted-foreground mb-12">
            hmu on any of these if you wanna talk or just hang out
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{s.label}</h3>
              <p className="text-xs text-muted-foreground">{s.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
