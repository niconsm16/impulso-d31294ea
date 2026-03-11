import { ImpulsoHero } from "./components/impulso/ImpulsoHero";
import { MinutoCero } from "./components/minuto-cero/MinutoCero";
import { Mentor } from "./components/mentor/Mentor";
import { ImpulsoCTA } from "./components/cta/ImpulsoCTA";
import { ImpulsoFooter } from "./components/footer/ImpulsoFooter";
import Banners from "./components/banners/banners";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <ImpulsoHero />
        <MinutoCero />
        <Mentor />
        <Banners />
        <ImpulsoCTA />
      </main>
      <ImpulsoFooter />
    </div>
  );
}
