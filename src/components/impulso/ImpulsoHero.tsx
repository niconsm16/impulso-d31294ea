import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import MinutoCeroButton from "./buttons/minuto-cero";
import MentorButton from "./buttons/mentor";
import ImpulsoSlogan from "./components/slogan";
import ImpulsoVideo from "./components/video";
import ImpulsoIntro from "./components/intro";
import ImpulsoLogo from "./components/logo";
import ImpulsoResume from "./components/resume";
import "./style.css";

export function ImpulsoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden body-hero impulso-container">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 scan-lines" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(0, 229, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full float-gentle opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full float-gentle opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 impulso-box">
        {/*<ImpulsoIntro />*/}

        <ImpulsoLogo />

        {/*<ImpulsoDivision />*/}

        <ImpulsoResume />

        <ImpulsoVideo />
        <ImpulsoSlogan />

        <motion.div
          className="flex flex-wrap gap-4 justify-cente logos-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <MinutoCeroButton />
          <MentorButton />
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
  );
}
