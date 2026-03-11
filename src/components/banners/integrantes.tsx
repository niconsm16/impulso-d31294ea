import Button from "./button";
import { grupo } from "./data";
import { motion } from "framer-motion";

export default function Integrantes() {
  return (
    <div className={"nosotros"}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 nosotros-title">
          <div
            className="w-2 h-2 rounded-full pulse-neon"
            style={{ background: "var(--integrantes-color)" }}
          />
          <span className="text-xs font-mono uppercase tracking-widest">
            Nosotros
          </span>
        </div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2 text-center"
      >
        Quiénes somos?
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={"integrantes-container"}
      >
        {grupo.map((integrante) => (
          <div className={"integrante"} key={integrante.nombre}>
            <div className={"nombre"}>
              {integrante.nombre}
              <div className={"links"}>
                {integrante.web && <Button type="web" link={integrante.web} />}
                {integrante.ln && <Button type="ln" link={integrante.ln} />}
              </div>
            </div>
            <div className={"licenciatura"}>{integrante.licenciatura}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
