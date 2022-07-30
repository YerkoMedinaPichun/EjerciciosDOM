import { cuentaRegresiva } from "./dom/cuenta_regresiva.js";
import { darkMode } from "./dom/dark_mode.js";
import funcionesMenuHamburguer from "./dom/menu_hamburguesa.js";
import { alarma, relojDigital } from "./dom/reloj_alarma.js";
import { scrollBtnTop } from "./dom/scroll_top_btn.js";
import { acortadores, funcionesEventosTeclado } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  funcionesMenuHamburguer();
  relojDigital(d, "reloj", "iniciar-reloj", "detener-reloj");
  alarma(d, "alarma", "iniciar-alarma", "detener-alarma");
  funcionesEventosTeclado(d, "contenedor-lienzo");
  cuentaRegresiva(d, "tiempo", "Sep 27, 2022", "Feliz Cumpleaños!!!");
  scrollBtnTop(d, "scroll-top-btn");
});
//sacamos la funcion darkMode, ya que necesitamos usar localstorage y se debe ejecutar en un DOMContentLoaded, pero no puede llamarse este metodo dentro del mismo método, por lo tanto sacamos la funcion darkmode del DOMContentLoaded
darkMode(d, "dark-mode-btn");
d.addEventListener("keydown", (e) => {
  //Cuando se presiona

  acortadores(d, e);
  // moverBola(d, e, "contenedor-lienzo", "objeto");
});

// d.addEventListener("keyup", (e) => {
//   //Cuando se suelta la pagina
//   acortadores(d, e);
// });

// d.addEventListener("keypress", (e) => {
//   //Cuando se mantiene presionada
//   acortadores(d, e);
// });
