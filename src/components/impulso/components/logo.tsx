import { motion } from "framer-motion";

export default function ImpulsoLogo() {
  return (
    <motion.h1
      className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/*<span className="text-foreground">IMPULSO</span>*/}
      <img
        src="assets/images/impulso_logo.png"
        style={{
          justifySelf: "center",
          objectFit: "cover",
          height: "175px",
          width: "500px",
        }}
      />
    </motion.h1>
  );
}
