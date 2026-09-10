import { motion } from "framer-motion";
import { ArrowRight, Send, X } from "lucide-react";
import mascots from "../../assets/og-callers-mascots.png";

// Hero introduces the community with its signature mascot line-up.
export function HeroSection() {
  return (
    <section id="home" className="hero-grid relative isolate overflow-hidden border-b border-primary/25">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="mx-auto grid min-h-[530px] max-w-[1480px] items-end gap-3 px-5 pt-14 lg:grid-cols-[0.86fr_1.24fr] lg:px-7 lg:pt-8">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.65 }} className="relative z-10 pb-9 lg:self-center lg:pb-16">
          <p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.34em] text-primary sm:text-xs">Trade / Call / Grow / Together</p>
          <h1 className="text-glow font-display text-[clamp(3.1rem,8vw,6.9rem)] font-black uppercase leading-[0.78] text-foreground">
            OG <span className="text-primary">Callers</span>
          </h1>
          <p className="mt-4 font-display text-[clamp(0.9rem,2vw,1.5rem)] font-bold uppercase tracking-[0.24em] text-foreground">The first official squad coin</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">A community of traders, degens and believers.<br />Calls, alpha, memes and real opportunities.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#community" className="inline-flex h-12 items-center gap-3 rounded-md bg-primary px-6 font-mono text-xs font-black text-primary-foreground shadow-neon-strong">
              <X className="size-5" /> JOIN US ON X <ArrowRight className="size-4" />
            </motion.a>
            <a href="#community" aria-label="Telegram" className="social-button"><Send className="size-5" /></a>
            <a href="#community" aria-label="X social" className="social-button"><X className="size-5" /></a>
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
