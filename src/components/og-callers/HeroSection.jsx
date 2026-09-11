import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import bgVideo from "../../assets/bgvideoo.mp4";
import bgVideoMobile from "../../assets/bgmobile.mp4";
import { DiscordIcon, XLogoIcon } from "./shared";

const CA_ADDRESS = "eshjjdshbnewjbmbswejhsdfnm";

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
      <span className="truncate">CA {CA_ADDRESS}</span>
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
      {/* Mobile: video already carries the branding/copy, so we only overlay the CA button + socials. */}
      <div className="relative isolate min-h-[620px] overflow-hidden lg:hidden">
        <video autoPlay muted playsInline className="absolute inset-0 size-full object-cover">
          <source src={bgVideoMobile} type="video/mp4" />
        </video>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="absolute inset-x-0 top-[46%] z-10 flex -translate-y-1/2 items-center justify-center gap-3 px-5">
          {xSocial}
          {caPill}
          {discordSocial}
        </motion.div>
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
