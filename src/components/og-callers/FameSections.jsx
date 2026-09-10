import { motion } from "framer-motion";
import { AlertTriangle, CircleUserRound, Star } from "lucide-react";
import { Panel, SectionTitle } from "./shared";

const heroes = [["AlphaWolf","+1,248.6% PNL","TOP PERFORMER","Consistent gains, never gives up."],["GreenRanger","+982.3% PNL","RISK TAKER","Big risks. Bigger rewards."],["SolKing","+876.4% PNL","COMMUNITY BUILDER","Brings the squad together."],["MoonLambo","+754.2% PNL","ALPHA FINDER","Finds alpha before everyone."]];
const shame = [["RugRider","-98.5% PNL","REKT","Bought the top"],["PaperHandsJoe","-87.3% PNL","PANIC SELLER","Sold low"],["LeverageLad","-76.4% PNL","OVERLEVERAGE","100x on shitcoin"],["FOMOFrank","-62.1% PNL","FOMO","Chased the pump"]];

function FameCard({ item, danger, index }) {
  const [name,pnl,badge,reason] = item;
  return <motion.article initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -4 }} className={`rounded-md border p-3 text-center ${danger ? "border-danger/60 bg-danger/5" : "border-primary/50 bg-primary/5"}`}><span className={`mx-auto grid size-16 place-items-center rounded-full border bg-background ${danger ? "border-danger/50 text-danger" : "border-primary/50 text-primary"}`}><CircleUserRound className="size-10" /></span><h3 className="mt-3 text-sm font-bold">{name}</h3><p className={`mt-1 font-mono text-[10px] font-bold ${danger ? "text-danger" : "text-primary"}`}>{pnl}</p><span className={`mt-2 inline-block rounded border px-2 py-1 font-mono text-[8px] ${danger ? "border-danger/50 text-danger" : "border-primary/50 text-primary"}`}>{badge}</span><p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">{danger ? `Reason: ${reason}` : reason}</p></motion.article>;
}

// Fame boards celebrate community wins and memorialize costly mistakes.
export function FameSections() {
  return <div className="grid gap-5 xl:grid-cols-[1.25fr_.95fr]">
    <Panel id="fame"><SectionTitle icon={Star} title="Hall of Fame" subtitle="Legendary traders. Real dedication." /><div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">{heroes.map((item,index)=><FameCard key={item[0]} item={item} index={index} />)}</div></Panel>
    <Panel id="shame" danger><SectionTitle icon={AlertTriangle} title="Shame of Fame" subtitle="Bad calls. Lessons for everyone." danger /><div className="grid grid-cols-2 gap-3 p-4">{shame.map((item,index)=><FameCard key={item[0]} item={item} danger index={index} />)}</div></Panel>
  </div>;
}
