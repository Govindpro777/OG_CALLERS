import { Clock3 } from "lucide-react";
import trophyIcon from "../../assets/trophy.png";
import { Panel, SectionTitle } from "./shared";

// No contest is live right now — show a heads-up instead of fake cards.
export function ContestsSection() {
  return (
    <Panel id="contests">
      <SectionTitle icon={trophyIcon} title="Contests" subtitle="Nothing live right now — stay tuned." />
      <div className="flex flex-col items-center gap-3 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full border border-primary/50 bg-primary/10 text-primary">
          <Clock3 className="size-7" />
        </span>
        <h3 className="font-display text-xl font-bold uppercase text-primary">No Contest Is Live Right Now</h3>
        <p className="max-w-md text-sm text-muted-foreground">Be ready for the contest to earn OG Callers!</p>
      </div>
    </Panel>
  );
}
