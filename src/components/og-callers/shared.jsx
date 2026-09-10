import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export function Brand({ compact = false }) {
  return (
    <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="OG Callers home">
      <span className={`${compact ? "size-9" : "size-11"} grid shrink-0 place-items-center rounded-full border border-primary bg-primary/10 text-primary shadow-neon transition-transform group-hover:rotate-6`}>
        <CircleUserRound className={compact ? "size-6" : "size-7"} strokeWidth={2.4} />
      </span>
      <span className="min-w-0 font-display text-xl font-black uppercase leading-none text-foreground sm:text-2xl">
        OG <span className="text-primary">Callers</span>
      </span>
    </a>
  );
}

export function Panel({ children, className = "", danger = false, ...props }) {
  return (
    <motion.section
      {...reveal}
      {...props}
      className={`panel-frame relative overflow-hidden border ${danger ? "border-danger/70" : "border-primary/65"} bg-panel/85 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ icon: Icon, title, subtitle, danger = false, action = "VIEW ALL" }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 border-b border-border/70 px-4 py-3 sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`grid size-9 shrink-0 place-items-center rounded-md ${danger ? "bg-danger/15 text-danger" : "bg-primary/15 text-primary"}`}>
          <Icon className="size-6" fill="currentColor" />
        </span>
        <div className="min-w-0">
          <h2 className={`truncate font-display text-lg font-black uppercase sm:text-xl ${danger ? "text-danger" : "text-primary"}`}>{title}</h2>
          <p className="text-xs text-muted-foreground sm:text-sm">{subtitle}</p>
        </div>
      </div>
      <a href="#home" className={`mt-1 shrink-0 font-mono text-[12px] font-bold sm:text-[13px] ${danger ? "text-danger" : "text-primary"}`}>
        {action} →
      </a>
    </div>
  );
}
