import { rutas, WebType } from "./data";

type Props = {
  link: string;
  type: WebType;
};

export default function Button({ link, type }: Props) {
  return (
    <a href={rutas[type].init + link} target="_blank">
      <img src={rutas[type].path} />
    </a>
  );
}
