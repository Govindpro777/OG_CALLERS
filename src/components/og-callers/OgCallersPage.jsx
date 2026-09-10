import { AboutSection } from "./AboutSection";
import { ContestsSection } from "./ContestsSection";
import { FameSections } from "./FameSections";
import { HeroSection } from "./HeroSection";
import { LeaderboardSection } from "./LeaderboardSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StatsBar } from "./StatsBar";

// Main page composes the complete OG Callers community experience.
export default function OgCallersPage() {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main><HeroSection /><StatsBar /><div className="mx-auto max-w-[1400px] space-y-5 px-4 py-6 sm:px-7"><AboutSection /><LeaderboardSection /><FameSections /><ContestsSection /></div></main><SiteFooter /></div>;
}
