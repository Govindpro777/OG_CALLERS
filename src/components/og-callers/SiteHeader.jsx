import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Brand } from "./shared";

const links = [
  ["HOME", "home"],
  ["LEADERBOARD", "leaderboard"],
  ["HALL OF FAME", "fame"],
  ["SHAME OF FAME", "shame"],
  ["CONTESTS", "contests"],
];

// Sticky navigation keeps every dashboard area within quick reach.
export function SiteHeader() {
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="sticky top-0 z-50 border-b border-primary/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:h-[74px] sm:px-7">
        <Brand compact />
        <nav className="mx-auto hidden items-stretch self-stretch md:flex" aria-label="Main navigation">
          {links.map(([label, id], index) => (
            <a key={id} href={`#${id}`} className={`grid place-items-center border-b-2 px-5 font-mono text-[13px] font-semibold transition-colors hover:text-primary ${index === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#community" className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-primary px-3 font-mono text-[13px] font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:h-10 sm:px-5">
          <X className="size-4" /> X SOCIAL
        </a>
      </div>
      <nav className="scrollbar-none flex overflow-x-auto border-t border-border/40 px-4 md:hidden" aria-label="Mobile navigation">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} className="shrink-0 px-3 py-2.5 font-mono text-[12px] text-muted-foreground hover:text-primary">{label}</a>)}
      </nav>
    </motion.header>
  );
}
