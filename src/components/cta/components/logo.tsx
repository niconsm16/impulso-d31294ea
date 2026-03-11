import { Rocket } from "lucide-react";
import { useRef } from "react";

export default function CTALogo() {
  const logoRef = useRef<HTMLVideoElement | null>(null);

  function clickHandler() {
    if (!logoRef.current) return;
    logoRef.current.play();
  }

  return (
    <div
      className="inline-flex p-4 rounded-full neon-border neon-glow mb-8 video-container"
      onClick={clickHandler}
    >
      <video ref={logoRef} src="assets/video/impulso.webm" muted></video>
    </div>
  );
}
