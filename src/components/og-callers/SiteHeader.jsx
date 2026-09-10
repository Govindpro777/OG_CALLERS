import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Brand, XLogoIcon } from "./shared";

const links = [
  ["HOME", "home"],
  ["LEADERBOARD", "leaderboard"],
  ["HALL OF FAME", "fame"],
  ["SHAME OF FAME", "shame"],
  ["CONTESTS", "contests"],
];

// Sticky navigation keeps every dashboard area within quick reach.
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="sticky top-0 z-50 border-b border-primary/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:h-[74px] sm:justify-between sm:gap-4 sm:px-7">
        <Brand compact />
        <nav className="mx-auto hidden items-stretch self-stretch md:flex" aria-label="Main navigation">
          {links.map(([label, id], index) => (
            <a key={id} href={`#${id}`} className={`grid place-items-center border-b-2 px-5 font-mono text-[13px] font-semibold transition-colors hover:text-primary ${index === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href="#community" className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-primary px-3 font-mono text-[13px] font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:h-10 sm:px-5">
            <XLogoIcon className="size-4" />SOCIAL
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-9 shrink-0 place-items-center rounded-md border border-primary/60 text-primary transition-colors hover:bg-primary/10 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            aria-label="Mobile navigation"
            className="overflow-hidden border-t border-border/40 md:hidden"
          >
            <div className="flex flex-col px-4">
              {links.map(([label, id], index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-border/40 py-3 font-mono text-[13px] font-semibold last:border-b-0 ${index === 0 ? "text-primary" : "text-muted-foreground"}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
