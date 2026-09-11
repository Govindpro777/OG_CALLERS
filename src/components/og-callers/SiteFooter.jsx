import { ArrowUp } from "lucide-react";
import { Brand, XLogoIcon } from "./shared";

// Footer repeats core navigation and the community-first positioning.
export function SiteFooter() {
  return <footer className="border-t border-primary/45 bg-background"><div className="mx-auto max-w-[1480px] px-4 py-5 sm:px-7"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex"><Brand compact /><nav className="mx-auto hidden gap-7 md:flex">{["HOME", "LEADERBOARD", "HALL OF FAME", "SHAME OF FAME", "CONTESTS"].map(label => <a key={label} href="#home" className="font-mono text-sm text-muted-foreground hover:text-primary">{label}</a>)}</nav><div className="flex items-center gap-3"><a href="#community" className="hidden items-center gap-2 rounded border border-border px-3 py-2 font-mono text-sm sm:flex">JOIN US ON <XLogoIcon className="size-3" /></a> <a href="#home" aria-label="Back to top" className="grid size-9 place-items-center rounded-full border border-border"><ArrowUp className="size-4" /></a></div></div><div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-border pt-4 font-mono text-[13px] uppercase text-muted-foreground"><span>Trade smart / Stay alpha / OG Callers</span><span className="text-primary">Built by the community // For the community</span></div></div></footer>;
}
