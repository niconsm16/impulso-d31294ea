import { motion } from 'framer-motion'
import { Brain, FileText, Package, Sparkles, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Diagnóstico Automático',
    description: 'Identifica instantáneamente productos con bajo rendimiento y emite alertas específicas sobre las causas del problema.',
    highlight: 'Detección instantánea',
  },
  {
    icon: FileText,
    title: 'Optimización de Contenido con IA',
    description: 'Genera automáticamente títulos, descripciones y bullets persuasivos para mejorar la conversión.',
    highlight: 'Generación automática',
  },
  {
    icon: Package,
    title: 'Generador Inteligente de Bundles',
    description: 'Crea automáticamente combinaciones de productos (ej. "Kit Fitness") para aumentar el ticket promedio.',
    highlight: 'Bundles inteligentes',
  },
]

export function Mentor() {
  return (
    <section id="mentor" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Purple accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px]" style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-electric/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-electric pulse-neon" />
            <span className="text-xs font-mono text-accent-electric uppercase tracking-widest">Producto 02</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-foreground">
            <span className="text-accent-electric" style={{ textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>Mentor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IA diseñada para convertir datos de Tiendanube en ventas reales 
            mediante la <span className="text-accent-electric">automatización de decisiones</span>.
          </p>
        </motion.div>

        {/* Transformation banner */}
        <motion.div
          className="glass-dark rounded-xl p-6 mb-12 text-center border border-accent-electric/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-muted-foreground line-through">"Analizar métricas y reportes"</span>
            <ArrowRight className="w-5 h-5 text-accent-electric" />
            <span className="text-foreground font-semibold">
              <Sparkles className="w-4 h-4 inline-block mr-1 text-accent-electric" />
              "Decisiones automáticas y acciones listas para aplicar"
            </span>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group rounded-xl border border-border/50 bg-card/30 p-8 gentle-animation hover:border-accent-electric/40 hover:elevated-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)'
              }} />
              
              <div className="p-3 rounded-lg border border-accent-electric/20 bg-accent-electric/5 w-fit mb-6 group-hover:border-accent-electric/40 gentle-animation">
                <feature.icon className="w-7 h-7 text-accent-electric" />
              </div>
              
              <div className="inline-block px-2 py-0.5 rounded text-xs font-mono text-accent-electric bg-accent-electric/10 mb-3">
                {feature.highlight}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
