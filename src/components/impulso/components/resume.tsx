import { motion } from "framer-motion";

export default function ImpulsoResume() {
  return (
    <motion.p
      className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed impulso-resume"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Dos productos. Un ecosistema.
      <span className="text-primary" style={{ color: "black" }}>
        {" "}
        Decisiones inteligentes
      </span>{" "}
      para ecommerces que quieren liderar.
    </motion.p>
  );
}
