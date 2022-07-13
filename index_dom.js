import funcionesMenuHamburguer from "./dom/menu_hamburguesa.js";
import { alarma, relojDigital } from "./dom/reloj_alarma.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  funcionesMenuHamburguer();
  relojDigital(d, "reloj", "iniciar-reloj", "detener-reloj");
  alarma(d, "alarma", "iniciar-alarma", "detener-alarma");
});
