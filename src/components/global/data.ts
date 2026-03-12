import { ReactNode } from "react";
import SystemIcon from "../icons/SystemIcon";
import DemoIcon from "../icons/DemoIcon";

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
];
