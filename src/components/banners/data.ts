export type WebType = "web" | "ln";

export type WebIcon = {
  path: string;
  init: string;
};

export type TIntegrante = {
  nombre: string;
  licenciatura: string;
  web?: string;
  ln?: string;
};

export const rutas: Record<WebType, WebIcon> = {
  ln: {
    path: "assets/svg/ln.svg",
    init: "https://www.linkedin.com/in/",
  },
  web: {
    path: "assets/svg/web.svg",
    init: "https://",
  },
};

export const grupo: TIntegrante[] = [
  {
    nombre: "Nicolás S. Machicado Miranda",
    licenciatura: "Ingeniería de Sistemas, Realizador y Producto",
    web: "www.niconsm.dev",
    ln: "nicolasmachicado",
  },
  {
    nombre: "Elmer Garcia Quebedo",
    licenciatura: "Negocios internacionales",
  },
  {
    nombre: "Sara López López",
    licenciatura: "Administracion y finanzas, Análisis de datos",
    ln: "sara-l%C3%B3pez-9453b228a",
  },
  {
    nombre: "María Jacqueline Rea León",
    licenciatura: "Administracion y empresas y Marketing Digital",
  },
  {
    nombre: "Adan Concha Gonzalez",
    licenciatura: "Ingeniería Industrial",
  },
];
