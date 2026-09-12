import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { getWalletTrades } from "../../lib/pumpfun-leaderboard";

export function TransactionsModal({ wallet, name, onClose }) {
  const open = Boolean(wallet);

  const { data: trades, isLoading, isError } = useQuery({
    queryKey: ["pumpfun-wallet-trades", wallet],
    queryFn: () => getWalletTrades({ data: wallet }),
    enabled: open,
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="panel-frame relative flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden border border-primary/65 bg-panel"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-bold uppercase text-primary">Transactions</h3>
                <p className="truncate text-xs text-muted-foreground">{name}</p>
              </div>
              <button type="button" onClick={onClose} aria-label="Close" className="grid size-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <X className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-[0.8fr_0.7fr_0.7fr_0.7fr_24px] gap-2 border-b border-border px-4 py-2 font-mono text-[11px] uppercase text-muted-foreground sm:px-5">
              <span>Trade</span><span>Amount</span><span>Size</span><span>MC</span><span />
            </div>

            <div className="overflow-y-auto px-4 py-2 sm:px-5">
              {isLoading && <p className="py-8 text-center text-sm text-muted-foreground">Loading transactions…</p>}
              {isError && <p className="py-8 text-center text-sm text-danger">Couldn't load transactions.</p>}
              {trades?.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">No OGCALLERS trades found for this wallet.</p>}

              {trades?.map((trade) => {
                const positive = trade.type === "buy";
                return (
                  <div key={trade.tx} className="grid grid-cols-[0.8fr_0.7fr_0.7fr_0.7fr_24px] items-center gap-2 border-b border-border/50 py-3 text-xs last:border-b-0">
                    <div>
                      <p className={`font-mono text-[13px] font-bold uppercase ${positive ? "text-primary" : "text-danger"}`}>{trade.type}</p>
                      <p className="text-[11px] text-muted-foreground">{trade.timeAgo}</p>
                    </div>
                    <span className="font-mono text-foreground">{trade.amount}</span>
                    <span className="font-mono text-foreground">{trade.sizeUsd}</span>
                    <span className="font-mono text-foreground">{trade.marketCap}</span>
                    <a href={`https://solscan.io/tx/${trade.tx}`} target="_blank" rel="noreferrer" aria-label="View transaction" className="text-primary">
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
