import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import diamondIcon from "../../assets/diamond.png";
import fireIcon from "../../assets/fire.png";
import growthIcon from "../../assets/growth.png";
import peoplesIcon from "../../assets/peoples.png";
import { getCommunityStats } from "../../lib/pumpfun-community";
import { reveal } from "./shared";

// Community metrics summarize the activity at a glance, using live pump.fun squad data.
export function StatsBar() {
  const { data } = useQuery({
    queryKey: ["pumpfun-community-stats"],
    queryFn: () => getCommunityStats(),
    refetchInterval: 60_000,
  });

  const stats = [
    [peoplesIcon, data ? String(data.memberCount) : "—", "COMMUNITY MEMBERS"],
    [growthIcon, data?.totalPnl ?? "—", "TOTAL PNL (COMMUNITY)"],
    [fireIcon, data?.totalValue ?? "—", "TOP AMOUNT"],
    [diamondIcon, "100%", "COMMUNITY OWNED"],
  ];

  return (
    <motion.section {...reveal} className="relative z-20 mx-auto -mt-1 max-w-[1400px] px-4 sm:px-7 mt-10">
      <div className="panel-frame grid grid-cols-2 overflow-hidden border border-primary/70 bg-panel shadow-neon lg:grid-cols-4">
        {stats.map(([icon, value, label], index) => (
          <motion.div whileHover={{ backgroundColor: "var(--primary-soft)" }} key={label} className={`flex min-w-0 items-center gap-3 px-4 py-5 sm:px-6 ${index % 2 ? "border-l border-border" : ""} ${index > 1 ? "border-t border-border lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}>
            <img src={icon} alt="" className="size-9 shrink-0 object-contain" />
            <div className="min-w-0"><p className="font-mono text-sm font-black text-foreground sm:text-base">{value}</p><p className="truncate font-mono text-sm text-muted-foreground sm:text-[12px]">{label}</p></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
