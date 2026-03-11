import { MentorIcon } from "@/components/icons/MentorIcon";

export default function MentorButton() {
  return (
    <a
      href="#mentor"
      className="py-3 rounded-lg font-semibold glass-dark neon-border text-foreground gentle-animation mentor-button impulso-button"
      style={{ fill: "white" }}
    >
      <MentorIcon />
    </a>
  );
}
