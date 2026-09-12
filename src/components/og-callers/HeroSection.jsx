import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import bgVideo from "../../assets/bgvideoo.mp4";
import mascots from "../../assets/mobilebg.png";
import { DiscordIcon, XLogoIcon } from "./shared";

const CA_ADDRESS = "DBDqhnAi5MjaHsk1JyUonAtUUrmRBJPjJi3GdiBLpump";
const CA_ADDRESS_SHORT = `${CA_ADDRESS.slice(0, 6)}...${CA_ADDRESS.slice(-6)}`;

// Hero introduces the community with its signature mascot line-up.
export function HeroSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopyCA() {
    try {
      await navigator.clipboard.writeText(CA_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard access unavailable, ignore
    }
  }

  const caPill = (
    <motion.div whileHover={{ scale: 1.02 }} className="flex h-12 min-w-0 max-w-full items-center gap-3 rounded-md bg-primary px-6 font-mono text-xs font-black text-primary-foreground shadow-neon-strong">
      <span className="shrink-0" title={CA_ADDRESS}>
        CA <span className="lg:hidden">{CA_ADDRESS_SHORT}</span><span className="hidden lg:inline">{CA_ADDRESS}</span>
      </span>
      <button
        type="button"
        onClick={handleCopyCA}
        aria-label="Copy contract address"
        className="grid shrink-0 place-items-center rounded transition-transform hover:scale-110"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </motion.div>
  );
  const xSocial = <a href="#community" aria-label="X social" className="social-button shrink-0"><XLogoIcon className="size-5" /></a>;
  const discordSocial = <a href="#community" aria-label="Discord" className="social-button shrink-0"><DiscordIcon className="size-5" /></a>;

  const caButton = (
    <>
      {caPill}
      {xSocial}
      {discordSocial}
    </>
  );

  return (
    <section id="home" className="relative isolate border-b border-primary/25">
      {/* Mobile: original text + mascot layout. */}
      <div className="hero-grid relative isolate overflow-hidden lg:hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="mx-auto grid min-h-[530px] max-w-[1480px] items-end gap-3 px-5 pt-14">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.65 }} className="relative z-10 pb-9">
            <p className="mb-4 font-mono text-[13px] font-black uppercase tracking-[0.34em] text-primary sm:text-xs">Trade / Call / Grow / Together</p>
            <h1 className="text-glow font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-tight text-foreground">
              OG <span className="text-primary">Callers</span>
            </h1>
            <p className="mt-4 font-display text-[clamp(0.9rem,2vw,1.1rem)] font-bold uppercase tracking-[0.24em] text-foreground">The first official squad coin</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">A community of traders, degens and believers.<br />Calls, alpha, memes and real opportunities.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {caButton}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative -order-1 flex min-h-[280px] items-end">
            <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/80 shadow-orbit sm:size-96" />
            <img src={mascots} alt="The five OG Callers community mascots" width={1408} height={864} className="relative z-10 w-full object-contain object-bottom drop-shadow-mascot" />
            <p className="absolute right-2 top-5 z-20 rotate-[-7deg] font-hand text-2xl uppercase leading-tight text-primary sm:right-6 sm:text-3xl">Good calls<br />bigger wins</p>
          </motion.div>
        </div>
      </div>

      {/* Desktop: video already carries the branding/copy, so we only overlay the CA button + socials. */}
      <div className="relative isolate hidden overflow-hidden lg:block">
        <video autoPlay muted playsInline className="absolute inset-0 size-full object-cover">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1480px] items-end px-7 pb-22 ml-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex flex-wrap items-center gap-3">
            {caButton}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
