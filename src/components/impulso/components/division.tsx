import { motion } from "framer-motion";

export default function ImpulsoDivision() {
  return (
    <motion.div
      className="h-1 w-24 mx-auto mb-8 rounded-full"
      style={{
        background:
          "linear-gradient(90deg, var(--accent-cyan), var(--naranja))",
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    />
  );
}
