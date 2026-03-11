import { motion } from "framer-motion";
import { Rocket, ArrowUpRight } from "lucide-react";
import CTALogo from "./components/logo";
import "./style.css";
import DemoButton from "./buttons/demo-button";

export function ImpulsoCTA() {
  return (
    <section className="relative py-24 overflow-hidden cta-container">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, rgba(0, 229, 255, 0.03) 50%, var(--background) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CTALogo />

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ¿Listo para transformar
            <br />
            <span className="impulso-text-primary impulso-text-glow">
              tu e-commerce?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Impulso integra inteligencia de mercado y automatización de ventas
            en un solo ecosistema. Conecta con nosotros para una demo
            personalizada.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <DemoButton />
            <a
              href="mailto:contacto@contacto@niconsm.dev"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold glass-dark neon-border text-foreground gentle-animation impulso-button-glow"
            >
              Contactar al Equipo
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: "Datos en tiempo real", value: "24/7" },
            { label: "Automatización IA", value: "100%" },
            { label: "Productos complementarios", value: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-dark rounded-xl p-6 neon-border"
            >
              <div className="text-3xl font-bold  impulso-text-primary font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
