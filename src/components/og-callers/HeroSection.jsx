import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, X } from "lucide-react";
import mascots from "../../assets/og-callers-mascots.png";

const CA_ADDRESS = "eshjjdshbnewjbmbswejhsdfnm";

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.522 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

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

  return (
    <section id="home" className="hero-grid relative isolate overflow-hidden border-b border-primary/25">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="mx-auto grid min-h-[530px] max-w-[1480px] items-end gap-3 px-5 pt-14 lg:grid-cols-[0.86fr_1.24fr] lg:px-7 lg:pt-8">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.65 }} className="relative z-10 pb-9 lg:self-center lg:pb-16">
          <p className="mb-4 font-mono text-[13px] font-black uppercase tracking-[0.34em] text-primary sm:text-xs">Trade / Call / Grow / Together</p>
          <h1 className="text-glow font-display text-[clamp(3.1rem,8vw,6.9rem)] font-black uppercase leading-[0.78] text-foreground">
            OG <span className="text-primary">Callers</span>
          </h1>
          <p className="mt-4 font-display text-[clamp(0.9rem,2vw,1.5rem)] font-bold uppercase tracking-[0.24em] text-foreground">The first official squad coin</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">A community of traders, degens and believers.<br />Calls, alpha, memes and real opportunities.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} className="inline-flex h-12 max-w-full items-center gap-3 rounded-md bg-primary px-6 font-mono text-xs font-black text-primary-foreground shadow-neon-strong">
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
            <a href="#community" aria-label="X social" className="social-button"><X className="size-5" /></a>
            <a href="#community" aria-label="Discord" className="social-button"><DiscordIcon className="size-5" /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative -order-1 flex min-h-[280px] items-end lg:order-none lg:min-h-[500px]">
          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/80 shadow-orbit sm:size-96" />
          <img src={mascots} alt="The five OG Callers community mascots" width={1408} height={864} className="relative z-10 w-full object-contain object-bottom drop-shadow-mascot" />
          <p className="absolute right-2 top-5 z-20 rotate-[-7deg] font-hand text-2xl uppercase leading-tight text-primary sm:right-6 sm:text-3xl">Good calls<br />bigger wins</p>
        </motion.div>
      </div>
    </section>
  );
}
