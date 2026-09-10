import { motion } from "framer-motion";
import { Award, ChartNoAxesCombined, CircleUserRound, Gem, Radio, Trophy, Users, X } from "lucide-react";
import { Panel } from "./shared";

const benefits = [[Users,"Real Community"],[Radio,"Alpha Calls"],[ChartNoAxesCombined,"Trading Insights"],[Trophy,"Exclusive Contests"],[Gem,"Airdrops & Rewards"]];

// Community panel highlights the group's benefits and social destination.
export function CommunityPanel() {
  return (
    <Panel id="community" className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center gap-4 border-b border-border pb-5"><span className="grid size-16 place-items-center rounded-full border border-primary bg-primary/10 text-primary shadow-neon"><CircleUserRound className="size-11" /></span><div><h2 className="font-display text-2xl font-black uppercase">OG <span className="text-primary">Callers</span></h2><p className="font-mono text-[12px] uppercase text-muted-foreground">The first official squad coin</p></div></div>
      <motion.div whileHover={{ scale: 1.015 }} className="my-5 flex items-center gap-3 rounded-md border border-primary/50 bg-primary/5 p-4"><span className="grid size-12 shrink-0 place-items-center rounded-full border border-primary text-primary"><Award /></span><div><p className="font-mono text-xs font-bold uppercase">Stronger together</p><p className="font-mono text-[12px] text-muted-foreground">Bigger than just a coin</p></div><ChartNoAxesCombined className="ml-auto size-10 text-primary" /></motion.div>
      <ul className="space-y-4 px-2">{benefits.map(([Icon,label]) => <li key={label} className="flex items-center gap-3 text-sm text-muted-foreground"><Icon className="size-5 text-primary" />{label}</li>)}</ul>
      <a href="#home" className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary font-mono text-[13px] font-black text-primary-foreground shadow-neon-strong"><X className="size-4" /> JOIN OUR X COMMUNITY →</a>
    </Panel>
  );
}
