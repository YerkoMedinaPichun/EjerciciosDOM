import funcionesMenuHamburguer from "./dom/menu_hamburguesa.js";
import { alarma, relojDigital } from "./dom/reloj_alarma.js";
import { acortadores, moverBola } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  funcionesMenuHamburguer();
  relojDigital(d, "reloj", "iniciar-reloj", "detener-reloj");
  alarma(d, "alarma", "iniciar-alarma", "detener-alarma");
});

d.addEventListener("keydown", (e) => {
  //Cuando se presiona

  acortadores(d, e);
  moverBola(d, e, "contenedor-lienzo", "objeto");
});

// d.addEventListener("keyup", (e) => {
//   //Cuando se suelta la pagina
//   acortadores(d, e);
// });

// d.addEventListener("keypress", (e) => {
//   //Cuando se mantiene presionada
//   acortadores(d, e);
// });
