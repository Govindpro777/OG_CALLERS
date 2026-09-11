import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export function XLogoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.522 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

export function Brand({ compact = false }) {
  return (
    <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="OG Callers home">
      <span className={`${compact ? "size-9" : "size-11"} grid shrink-0 place-items-center transition-transform group-hover:rotate-6`}>
        <img src={logo} alt="" className="size-full object-contain" />
      </span>
      <span className="min-w-0 font-display text-xl font-bold uppercase leading-none text-foreground sm:text-2xl">
        OG <span className="text-primary">Callers</span>
      </span>
    </a>
  );
}

export function Panel({ children, className = "", danger = false, ...props }) {
  return (
    <motion.section
      {...reveal}
      {...props}
      className={`panel-frame relative overflow-hidden border ${danger ? "border-danger/70" : "border-primary/65"} bg-panel/85 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ icon, title, subtitle, danger = false, action = "VIEW ALL" }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 border-b border-border/70 px-4 py-3 sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`grid size-10 shrink-0 place-items-center rounded-md ${danger ? "bg-danger/15 text-danger" : "bg-primary/15 text-primary"}`}>
          <img src={icon} alt="" className="size-7 object-contain" />
        </span>
        <div className="min-w-0">
          <h2 className={`truncate font-display text-lg font-bold uppercase sm:text-xl ${danger ? "text-danger" : "text-primary"}`}>{title}</h2>
          <p className="text-xs text-muted-foreground sm:text-sm">{subtitle}</p>
        </div>
      </div>
      <a href="#home" className={`mt-1 shrink-0 font-mono text-[12px] font-bold sm:text-[13px] ${danger ? "text-danger" : "text-primary"}`}>
        {action} →
      </a>
    </div>
  );
}
