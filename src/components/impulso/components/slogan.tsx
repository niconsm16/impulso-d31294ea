import { motion } from "framer-motion";

export default function ImpulsoSlogan() {
  return (
    <motion.p
      className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 impulso-slogan"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Minuto Cero + Mentor: el stack de IA que convierte datos en oportunidades
      de venta reales.
    </motion.p>
  );
}
