import Integrantes from "./integrantes";
import { motion } from "framer-motion";
import "./style.css";

export default function Banners() {
  return (
    <section className={"banners-container"}>
      <Integrantes />
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2 text-center pb-4"
      >
        Historia
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={"banner-container"}
      >
        <img src="assets/images/banner1.jpg" />
        <img src="assets/images/banner2.jpg" />
      </motion.div>
    </section>
  );
}
