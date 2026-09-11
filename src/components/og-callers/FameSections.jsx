import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import redIcon from "../../assets/red.png";
import starIcon from "../../assets/star.png";
import { Panel, SectionTitle } from "./shared";

const heroes = [["AlphaWolf","+1,248.6% PNL","TOP PERFORMER","Consistent gains, never gives up."],["GreenRanger","+982.3% PNL","RISK TAKER","Big risks. Bigger rewards."],["SolKing","+876.4% PNL","COMMUNITY BUILDER","Brings the squad together."],["MoonLambo","+754.2% PNL","ALPHA FINDER","Finds alpha before everyone."]];
const shame = [["RugRider","-98.5% PNL","REKT","Bought the top"],["PaperHandsJoe","-87.3% PNL","PANIC SELLER","Sold low"],["LeverageLad","-76.4% PNL","OVERLEVERAGE","100x on shitcoin"],["FOMOFrank","-62.1% PNL","FOMO","Chased the pump"]];

function FameCard({ item, danger, index }) {
  const [name,pnl,badge,reason] = item;
  return (
    <motion.article initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -4 }} className={`rounded-md border p-3 ${danger ? "border-danger/60 bg-danger/5" : "border-primary/50 bg-primary/5"}`}>
      <div className="flex items-start gap-3">
        <span className={`grid size-12 shrink-0 place-items-center rounded-full ${danger ? "bg-danger/15 text-danger" : "bg-primary/15 text-primary"}`}>
          <CircleUserRound className="size-9" fill="currentColor" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-foreground">{name}</h3>
          <p className={`font-mono text-[13px] font-bold ${danger ? "text-danger" : "text-primary"}`}>{pnl}</p>
          <span className={`mt-1 inline-block rounded border px-2 py-0.5 font-mono text-[11px] ${danger ? "border-danger/50 text-danger" : "border-primary/50 text-primary"}`}>{badge}</span>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{danger ? `Reason: ${reason}` : reason}</p>
    </motion.article>
  );
}

// Fame boards celebrate community wins and memorialize costly mistakes.
export function FameSections() {
  return <div className="grid gap-5 xl:grid-cols-[1.25fr_.95fr]">
    <Panel id="fame"><SectionTitle icon={starIcon} title="Hall of Fame" subtitle="Legendary traders. Real dedication." /><div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">{heroes.map((item,index)=><FameCard key={item[0]} item={item} index={index} />)}</div></Panel>
    <Panel id="shame" danger><SectionTitle icon={redIcon} title="Shame of Fame" subtitle="Bad calls. Lessons for everyone." danger /><div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">{shame.map((item,index)=><FameCard key={item[0]} item={item} danger index={index} />)}</div></Panel>
  </div>;
}
