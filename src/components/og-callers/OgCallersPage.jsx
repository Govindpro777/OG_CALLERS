import { CommunityPanel } from "./CommunityPanel";
import { ContestsSection } from "./ContestsSection";
import { FameSections } from "./FameSections";
import { HeroSection } from "./HeroSection";
import { LeaderboardSection } from "./LeaderboardSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StatsBar } from "./StatsBar";

// Main page composes the complete OG Callers community experience.
export default function OgCallersPage() {
  return <div className="min-h-screen overflow-hidden bg-background text-foreground"><SiteHeader /><main><HeroSection /><StatsBar /><div className="mx-auto max-w-[1400px] space-y-5 px-4 py-6 sm:px-7"><div className="grid gap-5 xl:grid-cols-[2.08fr_.92fr]"><LeaderboardSection /><CommunityPanel /></div><FameSections /><ContestsSection /></div></main><SiteFooter /></div>;
}
