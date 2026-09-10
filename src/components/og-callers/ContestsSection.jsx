import { motion } from "framer-motion";
import { Clock3, Gift, Image, LineChart, Trophy, Users, X } from "lucide-react";
import { Panel, SectionTitle } from "./shared";

const contests = [
  [X,"X Shill Contest","Shill OG CALLERS on X & get rewarded!","$2,500","4d 12h 34m 21s"],
  [Image,"Meme Creation Contest","Create the best OG CALLERS meme!","$1,000","7d 06h 12m 45s"],
  [LineChart,"Trading Challenge","Get the highest PNL this week!","$3,000","10d 03h 27m 10s"],
  [Users,"Community Growth","Invite friends & grow the squad!","$1,500","14d 19h 52m 33s"],
];

// Contest cards present the active ways members can earn rewards.
export function ContestsSection() {
  return <Panel id="contests"><SectionTitle icon={Trophy} title="Contests" subtitle="Join contests, complete tasks, win rewards!" /><div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-4">{contests.map(([Icon,title,copy,prize,time],index)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} whileHover={{y:-5}} className="rounded-md border border-primary/50 bg-primary/5 p-4"><div className="flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-md border border-primary/40 text-primary"><Icon className="size-5" /></span><div><h3 className="font-mono text-[10px] font-black uppercase text-primary">{title}</h3><p className="mt-1 text-[9px] text-muted-foreground">{copy}</p></div></div><div className="mt-5 flex items-end justify-between"><div><p className="flex items-center gap-1 font-mono text-[8px] text-muted-foreground"><Gift className="size-3 text-primary" /> Prize Pool</p><p className="font-mono text-xl font-black text-primary">{prize}</p></div><span className="rounded border border-primary/40 px-2 py-1 font-mono text-[7px] text-primary">RANDOM AIRDROP</span></div><p className="mt-4 flex items-center gap-2 font-mono text-[10px]"><Clock3 className="size-4 text-muted-foreground" />{time}</p><a href="#community" className="mt-4 flex h-9 items-center justify-center rounded bg-primary font-mono text-[9px] font-black text-primary-foreground">JOIN NOW →</a></motion.article>)}</div></Panel>;
}
