import SystemIcon from "../icons/SystemIcon";
import { globalIcons } from "./data";
import "./style.css";

const repositorio = "impulso-d31294ea/";

export default function Icons() {
  return (
    <div className={"global-icons"}>
      {globalIcons.map((icon) => (
        <div className={"icon"} key={icon.link}>
          <a href={repositorio + icon.link} target="_self" title={icon.title}>
            <icon.component />
          </a>
        </div>
      ))}
    </div>
  );
}
