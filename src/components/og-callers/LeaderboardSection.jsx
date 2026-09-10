import { motion } from "framer-motion";
import { ArrowUpRight, Crown, Trophy } from "lucide-react";
import { Panel, SectionTitle } from "./shared";

const traders = [
  ["AlphaDegen", "0x3f...7a9c", "+ $84,230", "+542.6%"], ["MoonshotMax", "0xa1...4e2f", "+ $62,411", "+421.3%"],
  ["GreenCallz", "0x9b...c3d1", "+ $48,772", "+389.7%"], ["SolanaSoul", "0x7e...a8f0", "+ $36,901", "+312.4%"],
  ["CashFlowKing", "0x5d...2b91", "+ $28,553", "+276.2%"], ["WhaleAlert", "0x8c...9f44", "+ $22,416", "+243.7%"],
  ["DeGenZero", "0x4a...6e77", "+ $18,903", "+201.6%"], ["PumpMaster", "0x2f...b9c2", "+ $14,672", "+168.9%"],
  ["LuckyLambo", "0x6e...3d55", "+ $11,348", "+142.7%"],
];

// Live leaderboard ranks the community's strongest traders.
export function LeaderboardSection() {
  return (
    <Panel id="leaderboard">
      <SectionTitle icon={Trophy} title="Trader Leaderboard" subtitle="Top traders by profit (PNL)" action="LIVE" />
      <div className="overflow-x-auto px-3 pb-3 sm:px-5">
        <div className="min-w-[590px]">
          <div className="grid grid-cols-[42px_1.25fr_0.9fr_0.78fr_0.66fr_26px] gap-2 border-b border-border px-2 py-3 font-mono text-[12px] uppercase text-muted-foreground">
            <span>#</span><span>Trader</span><span>Wallet</span><span>PNL</span><span>PNL %</span><span />
          </div>
          {traders.map(([name, wallet, pnl, percent], index) => (
            <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.045 }} key={name} className={`grid grid-cols-[42px_1.25fr_0.9fr_0.78fr_0.66fr_26px] items-center gap-2 border-b border-border/65 px-2 py-2.5 text-xs transition-colors hover:bg-primary/5 ${index === 0 ? "bg-primary/5" : ""}`}>
              <span className="font-mono font-bold text-foreground">{index < 3 ? <Crown className={`size-4 ${index === 0 ? "text-gold" : "text-muted-foreground"}`} fill="currentColor" /> : index + 1}</span>
              <span className="flex items-center gap-2 font-semibold"><span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-muted text-[13px]">OG</span>{name}</span>
              <span className="font-mono text-[13px] text-muted-foreground">{wallet}</span><span className="font-mono font-bold text-primary">{pnl}</span><span className="font-mono font-bold text-primary">{percent}</span><ArrowUpRight className="size-4 text-primary" />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-between px-2 pt-3 font-mono text-[12px] text-muted-foreground"><span><i className="mr-2 inline-block size-2 rounded-full bg-primary" />Live updates · Last updated 2 mins ago</span><a href="#leaderboard" className="text-primary">VIEW FULL LEADERBOARD →</a></div>
      </div>
    </Panel>
  );
}
