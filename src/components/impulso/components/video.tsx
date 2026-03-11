import { motion } from "framer-motion";
export default function ImpulsoVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <video
        src="assets/video/video.webm"
        controls
        className="impulso-video"
      ></video>
    </motion.div>
  );
}
