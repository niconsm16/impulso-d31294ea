import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ImpulsoIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border glass-dark">
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-sm font-mono text-primary font-medium">
          Inteligencia de Mercado en Tiempo Real
        </span>
      </div>
    </motion.div>
  );
}
