import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import hof1 from "../../assets/hof-1.jpeg";
import hof2 from "../../assets/hof-2.jpeg";
import hof3 from "../../assets/hof-3.jpeg";
import hof4 from "../../assets/hof-4.jpeg";
import hof5 from "../../assets/hof-6.jpeg"
import redIcon from "../../assets/red.png";
import shame1 from "../../assets/shame-1.jpeg";
import shame2 from "../../assets/shame-2.jpeg";
import starIcon from "../../assets/star.png";
import { getLeaderboard } from "../../lib/pumpfun-leaderboard";
import { ImagePreviewModal } from "./ImagePreviewModal";
import { Panel, SectionTitle } from "./shared";

const heroes = [
  ["cryptogodfather","+$17,391 PNL","OG BELIEVER","Was the first person to blast and believe in my vision before I even spoke to him.", hof5],
  ["hannahful","+$1,290 PNL","UP BIG","None of these people sold. Held strong the whole way.",hof1],
  ["tumors","+$10,226 PNL","UP BIG","Turned real conviction into a real bag — never wavered.",hof2],
  ["lastunknown","+$23,730 PNL","UP BIG","Anonymous but the biggest believer in the squad.",hof3],
  ["synciemann","+$466 PNL","UP BIG","In it for the culture, not just the chart.",hof4],
];
const shame = [
  ["henrynowak","REKT","HOS","Fudded our coin for a week and other members after losing $20 and losing his entry.",shame1],
  ["UniteTrenches","-$500","PANIC SELLER","Swing traded our chart and ended up losing $500. I sent him $500 and 1M coins to reimburse him — he unfollowed me and sold the 1M coins.",shame2],
];

function FameCard({ item, danger, index, livePnl, onImageClick }) {
  const [name,fallbackPnl,badge,reason,photo] = item;
  const pnl = livePnl ?? fallbackPnl;
  return (
    <motion.article initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -4 }} className={`overflow-hidden rounded-md border ${danger ? "border-danger/60 bg-danger/5" : "border-primary/50 bg-primary/5"}`}>
      {photo ? (
        <button
          type="button"
          onClick={() => onImageClick(photo, name)}
          aria-label={`Preview ${name}'s image`}
          className={`flex h-48 w-full items-center justify-center transition-opacity hover:opacity-80 ${danger ? "bg-danger/10" : "bg-primary/10"}`}
        >
          <img src={photo} alt="" className="h-full w-full object-contain" />
        </button>
      ) : (
        <div className={`flex h-48 items-center justify-center ${danger ? "bg-danger/10 text-danger" : "bg-primary/10 text-primary"}`}>
          <CircleUserRound className="size-16" fill="currentColor" />
        </div>
      )}
      <div className="p-3">
        <h3 className="truncate text-sm font-bold text-foreground">{name}</h3>
        <p className={`font-mono text-[13px] font-bold ${danger ? "text-danger" : "text-primary"}`}>{pnl}</p>
        <span className={`mt-1 inline-block rounded border px-2 py-0.5 font-mono text-[11px] ${danger ? "border-danger/50 text-danger" : "border-primary/50 text-primary"}`}>{badge}</span>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{danger ? `Reason: ${reason}` : reason}</p>
      </div>
    </motion.article>
  );
}

// Fame boards celebrate community wins and memorialize costly mistakes.
export function FameSections() {
  const { data: traders } = useQuery({
    queryKey: ["pumpfun-leaderboard"],
    queryFn: () => getLeaderboard(),
    refetchInterval: 60_000,
  });
  const [preview, setPreview] = useState(null);

  function findLivePnl(name) {
    return traders?.find((t) => t.name.toLowerCase() === name.toLowerCase())?.pnl;
  }

  function handleImageClick(photo, name) {
    setPreview({ src: photo, alt: name });
  }

  return <div className="space-y-5">
    <Panel id="fame"><SectionTitle icon={starIcon} title="Hall of Fame" subtitle="Legendary traders. Real dedication." /><div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">{heroes.map((item,index)=><FameCard key={item[0]} item={item} index={index} livePnl={findLivePnl(item[0])} onImageClick={handleImageClick} />)}</div></Panel>
    <Panel id="shame" danger><SectionTitle icon={redIcon} title="Shame of Fame" subtitle="Bad calls. Lessons for everyone." danger /><div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">{shame.map((item,index)=><FameCard key={item[0]} item={item} danger index={index} livePnl={findLivePnl(item[0])} onImageClick={handleImageClick} />)}</div></Panel>

    <ImagePreviewModal src={preview?.src} alt={preview?.alt} onClose={() => setPreview(null)} />
  </div>;
}
