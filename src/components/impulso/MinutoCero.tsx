import { motion } from 'framer-motion'
import { Activity, TrendingUp, Target, Bell, BarChart3, Layers } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Middleware de Inteligencia',
    description: 'Intercepta y analiza datos en tiempo real: productos, precios, volumen y rotación del mercado.',
  },
  {
    icon: TrendingUp,
    title: 'Detección de Patrones',
    description: 'Identifica tendencias emergentes y comportamientos históricos antes que la competencia.',
  },
  {
    icon: Target,
    title: 'Proyección de Rentabilidad',
    description: 'Determina cuándo un producto será rentable y cuándo el mercado estará saturado.',
  },
  {
    icon: Bell,
    title: 'Alertas Accionables',
    description: 'Entrega ventanas de oportunidad para saber exactamente cuándo entrar o salir del mercado.',
  },
]

const strategicValues = [
  {
    icon: Layers,
    title: 'Captación Temprana',
    description: 'Atrae al vendedor desde la "etapa de idea", meses antes de su primera venta.',
  },
  {
    icon: BarChart3,
    title: 'Retención y Lealtad',
    description: 'Reduce intentos fallidos y mejora la rentabilidad, disminuyendo la migración.',
  },
  {
    icon: Activity,
    title: 'Optimización del Ecosistema',
    description: 'Datos estratégicos sobre ciclos de saturación para mejorar algoritmos comerciales.',
  },
]

export function MinutoCero() {
  return (
    <section id="minuto-cero" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{
        background: 'radial-gradient(ellipse, rgba(0, 229, 255, 0.06) 0%, transparent 70%)',
        filter: 'blur(40px)'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neon-border mb-6">
            <div className="w-2 h-2 rounded-full bg-primary pulse-neon" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Producto 01</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-foreground">
            Minuto <span className="text-primary text-glow">Cero</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            El momento exacto en que una oportunidad de mercado emerge. 
            Anticípate a la competencia con inteligencia en tiempo real.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-dark rounded-xl p-6 gentle-animation hover:neon-glow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg neon-border bg-secondary/50 group-hover:neon-glow-strong gentle-animation">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Value */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Valor Estratégico para la Plataforma</h3>
          <p className="text-muted-foreground">Transforma la relación entre el marketplace y sus usuarios</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategicValues.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 rounded-xl border border-border/50 bg-card/30 gentle-animation hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="inline-flex p-3 rounded-full neon-border mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
