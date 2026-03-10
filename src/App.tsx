import { ImpulsoHero } from './components/impulso/ImpulsoHero'
import { MinutoCero } from './components/impulso/MinutoCero'
import { Mentor } from './components/impulso/Mentor'
import { ImpulsoCTA } from './components/impulso/ImpulsoCTA'
import { ImpulsoFooter } from './components/impulso/ImpulsoFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <ImpulsoHero />
        <MinutoCero />
        <Mentor />
        <ImpulsoCTA />
      </main>
      <ImpulsoFooter />
    </div>
  )
}
