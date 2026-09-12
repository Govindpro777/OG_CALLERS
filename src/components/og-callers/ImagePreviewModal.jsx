import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function ImagePreviewModal({ src, alt, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[85vh] max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className="max-h-[85vh] max-w-full rounded-md border border-primary/50 object-contain shadow-neon-strong" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="absolute -right-3 -top-3 grid size-9 place-items-center rounded-full border border-primary bg-panel text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
