import { ReactNode } from "react";
import SystemIcon from "../icons/SystemIcon";

type TGlobalIcon = {
  component: () => JSX.Element;
  link: string;
  title: string;
};

export const globalIcons: TGlobalIcon[] = [
  {
    component: SystemIcon,
    link: "/hardware.html",
    title: "Sistemas",
  },
];
