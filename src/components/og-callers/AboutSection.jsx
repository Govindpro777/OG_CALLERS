import { RefreshCw, Target } from "lucide-react";
import logo from "../../assets/logo.png";
import { Panel } from "./shared";

const paragraphs = [
  "Pump.fun just introduced squads, and OGCALLERS is built around a simple idea: what happens when some of the platform's most active callers actually coordinate?",
  "OGCALLERS is the first official coin of the OGCALLERS squad, making it an early experiment in turning a Pump.fun squad into something bigger than a leaderboard position.",
  "The structure is simple. Supply is distributed among squad members, members hold the coin, and the squad collectively calls it out through their own audiences.",
  "Instead of relying on one account to push a narrative, OGCALLERS creates a network of holders who are directly incentivized to grow the same thing.",
  "There's another layer: Pump.fun callout rewards. High-performing callouts can earn rewards based on their reach and engagement. With supply spread across active callers, OGCALLERS gives the squad a coin it can consistently rally around while members compete for those rewards individually. More attention creates more callouts, more callouts create more visibility, and more visibility can attract new supporters to both the coin and the squad.",
];

const closingParagraphs = [
  "And unlike a normal memecoin community built after a token launches, the community is the starting point here.",
  "If OGCALLERS can climb toward the top of the Pump.fun squad leaderboard, the coin effectively becomes a way for outsiders to bet on and support the squad itself.",
  "OGCALLERS is an attempt to turn Pump.fun's new social layer into a coordinated attention network — with its own coin sitting at the center of it.",
];

// Full-width thesis section: explains the squad-coin idea independent of any sibling's height.
export function AboutSection() {
  return (
    <Panel id="about" className="p-6 sm:p-10 lg:p-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
        <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-primary bg-primary/10 shadow-neon"><img src={logo} alt="" className="size-full scale-125 object-cover object-top" /></span>
        <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted-foreground">OG Callers · The first official squad coin</p>
        <h2 className="text-glow mt-2 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-tight text-foreground">
          What is <span className="text-primary">OG Callers</span>
        </h2>
        <p className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">The thesis behind the squad coin</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-x-12 gap-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:grid-cols-2 lg:gap-y-0">
        <div className="space-y-4">
          {paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-3 rounded-md border border-primary/50 bg-primary/5 p-4 text-center sm:flex-row sm:text-left">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary text-primary"><RefreshCw className="size-5" /></span>
            <p className="font-mono text-[12px] leading-relaxed text-foreground">Squad climbs → visibility increases → people discover OGCALLERS → members call it out → engagement and rewards increase → squad grows.</p>
          </div>
          {closingParagraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-md border border-primary bg-primary/10 p-6 text-center shadow-neon-strong">
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-primary bg-background text-primary"><Target className="size-6" /></span>
        <p className="mt-4 font-display text-lg font-bold uppercase text-primary sm:text-xl">Build the squad. Hold the coin. Call it out. Climb the leaderboard.</p>
      </div>
    </Panel>
  );
}
