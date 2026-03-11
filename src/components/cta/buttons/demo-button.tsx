import { ArrowUpRight } from "lucide-react";

export default function DemoButton() {
  return (
    <a
      href="mailto:contacto@contacto@niconsm.dev"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground gentle-animation hover:scale-105 impulso-button-demo"
      style={{
        background: "linear-gradient(135deg, var(--azul), var(--naranja))",
        color: "white",
      }}
    >
      Solicitar Demo
      <ArrowUpRight className="w-5 h-5" />
    </a>
  );
}
