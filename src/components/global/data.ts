import { ReactNode } from "react";
import SystemIcon from "../icons/SystemIcon";
import DemoIcon from "../icons/DemoIcon";
import ArgsIcon from "../icons/ArgsIcon";
import PrototypeIcon from "../icons/PrototypeIcon";

type TGlobalIcon = {
  component: () => JSX.Element;
  link: string;
  title: string;
};

export const globalIcons: TGlobalIcon[] = [
  {
    component: DemoIcon,
    link: "demo.html",
    title: "Demostración",
  },
  {
    component: SystemIcon,
    link: "hardware.html",
    title: "Sistemas",
  },
  {
    component: PrototypeIcon,
    link: "prototype.html",
    title: "Prototipo",
  },
  {
    component: ArgsIcon,
    link: "args.html",
    title: "Argumento",
  },
];
