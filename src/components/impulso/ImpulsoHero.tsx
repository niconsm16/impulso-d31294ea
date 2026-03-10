import { motion } from 'framer-motion'
import { ArrowDown, Zap } from 'lucide-react'

export function ImpulsoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 scan-lines" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(0, 229, 255, 0.08) 0%, transparent 60%)'
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full float-gentle opacity-30" style={{
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)'
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full float-gentle opacity-20" style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animationDelay: '3s'
      }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border glass-dark mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary font-medium">Inteligencia de Mercado en Tiempo Real</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-foreground">IMPULSO</span>
        </motion.h1>

        <motion.div
          className="h-1 w-24 mx-auto mb-8 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-electric))' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dos productos. Un ecosistema. 
          <span className="text-primary"> Decisiones inteligentes</span> para marketplaces que quieren liderar.
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Minuto Cero + Mentor: el stack de IA que convierte datos en oportunidades de venta reales.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#minuto-cero"
            className="px-8 py-3 rounded-lg font-semibold text-primary-foreground gentle-animation neon-glow-strong"
            style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-glow))' }}
          >
            Explorar Minuto Cero
          </a>
          <a
            href="#mentor"
            className="px-8 py-3 rounded-lg font-semibold glass-dark neon-border text-foreground gentle-animation hover:neon-glow"
          >
            Conocer Mentor
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  )
}
