import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import trophyIcon from "../../assets/trophy.png";
import trophyNormalIcon from "../../assets/trophy normal.png";
import { getLeaderboard } from "../../lib/pumpfun-leaderboard";
import { Panel, SectionTitle } from "./shared";
import { TransactionsModal } from "./TransactionsModal";

// Live leaderboard ranks the community's strongest traders using real pump.fun portfolio PNL.
export function LeaderboardSection() {
  const { data: traders, isLoading, isError } = useQuery({
    queryKey: ["pumpfun-leaderboard"],
    queryFn: () => getLeaderboard(),
    refetchInterval: 60_000,
  });

  const [selected, setSelected] = useState(null);

  return (
    <Panel id="leaderboard">
      <SectionTitle icon={trophyIcon} title="Trader Leaderboard" subtitle="Top traders by profit (PNL)" action="LIVE" />
      <div className="overflow-x-auto px-3 pb-3 sm:px-5">
        <div className="min-w-[780px]">
          <div className="max-h-[440px] overflow-y-auto">
            <div className="sticky top-0 z-10 grid grid-cols-[42px_1fr_0.7fr_0.6fr_0.5fr_0.65fr_0.85fr_26px] gap-2 border-b border-border bg-panel px-2 py-3 font-mono text-[12px] uppercase text-muted-foreground">
              <span>#</span><span>Trader</span><span>Wallet</span><span>PNL</span><span>PNL %</span><span>OG HOLDERS</span><span>TRANSACTIONS</span><span />
            </div>

            {isLoading && <p className="px-2 py-8 text-center text-sm text-muted-foreground">Loading live PNL…</p>}
            {isError && <p className="px-2 py-8 text-center text-sm text-danger">Couldn't load live leaderboard data.</p>}

            {traders?.map(({ name, wallet, fullWallet, pnl, percent, link, pnlValue, ogHeld }, index) => {
              const positive = pnlValue >= 0;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(index * 0.045, 1) }}
                  key={name}
                  className={`grid grid-cols-[42px_1fr_0.7fr_0.6fr_0.5fr_0.65fr_0.85fr_26px] items-center gap-2 border-b border-border/65 px-2 py-2.5 text-xs transition-colors hover:bg-primary/5 ${index === 0 ? "bg-primary/5" : ""}`}
                >
                  <span className="font-mono font-bold text-foreground">{index === 0 ? <img src={trophyNormalIcon} alt="" className="size-6" /> : index + 1}</span>
                  <span className="flex items-center gap-2 font-semibold"><span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/50 bg-muted text-[13px]">OG</span>{name}</span>
                  <span className="font-mono text-[13px] text-muted-foreground">{wallet}</span>
                  <span className={`font-mono font-bold ${positive ? "text-primary" : "text-danger"}`}>{pnl}</span>
                  <span className={`font-mono font-bold ${positive ? "text-primary" : "text-danger"}`}>{percent}</span>
                  <span className="font-mono text-[13px] font-bold text-primary">{ogHeld}</span>
                  <button
                    type="button"
                    onClick={() => setSelected({ wallet: fullWallet, name })}
                    className="justify-self-start rounded border border-primary/50 px-2 py-1 font-mono text-[11px] font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Check
                  </button>
                  <a href={link} target="_blank" rel="noreferrer" aria-label="Open profile" className="text-primary">
                    <ArrowUpRight className="size-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-between px-2 pt-3 font-mono text-[12px] text-muted-foreground"><span><i className="mr-2 inline-block size-2 rounded-full bg-primary" />Live updates · Refreshed every minute</span><a href="#leaderboard" className="text-primary">VIEW FULL LEADERBOARD →</a></div>
      </div>

      <TransactionsModal wallet={selected?.wallet} name={selected?.name} onClose={() => setSelected(null)} />
    </Panel>
  );
}
