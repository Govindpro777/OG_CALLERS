import { motion } from "framer-motion";
import { ChartNoAxesCombined, Flame, Gem, Users } from "lucide-react";
import { reveal } from "./shared";

const stats = [
  [Users, "498", "COMMUNITY MEMBERS"],
  [ChartNoAxesCombined, "$247.8K", "TOTAL PNL (COMMUNITY)"],
  [Flame, "+12,438%", "TOP TRADER PNL"],
  [Gem, "100%", "COMMUNITY OWNED"],
];

// Community metrics summarize the activity at a glance.
export function StatsBar() {
  return (
    <motion.section {...reveal} className="relative z-20 mx-auto -mt-1 max-w-[1400px] px-4 sm:px-7">
      <div className="panel-frame grid grid-cols-2 overflow-hidden border border-primary/70 bg-panel shadow-neon lg:grid-cols-4">
        {stats.map(([Icon, value, label], index) => (
          <motion.div whileHover={{ backgroundColor: "var(--primary-soft)" }} key={label} className={`flex min-w-0 items-center gap-3 px-4 py-5 sm:px-6 ${index % 2 ? "border-l border-border" : ""} ${index > 1 ? "border-t border-border lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}>
            <Icon className="size-7 shrink-0 text-primary" fill="currentColor" />
            <div className="min-w-0"><p className="font-mono text-sm font-black text-foreground sm:text-base">{value}</p><p className="truncate font-mono text-sm text-muted-foreground sm:text-[12px]">{label}</p></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
