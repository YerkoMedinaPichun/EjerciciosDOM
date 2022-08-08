import { cuentaRegresiva } from "./dom/cuenta_regresiva.js";
import { darkMode } from "./dom/dark_mode.js";
import { menuDesplegable } from "./dom/menu_desplegable.js";
import funcionesMenuHamburguer from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { alarma, relojDigital } from "./dom/reloj_alarma.js";
import { scrollBtnTop } from "./dom/scroll_top_btn.js";
import { acortadores, funcionesEventosTeclado } from "./dom/teclado.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  funcionesMenuHamburguer();
  relojDigital(d, "reloj", "iniciar-reloj", "detener-reloj");
  alarma(d, "alarma", "iniciar-alarma", "detener-alarma");
  funcionesEventosTeclado(d, "contenedor-lienzo");
  cuentaRegresiva(d, "tiempo", "Sep 27, 2022", "Feliz Cumpleaños!!!");
  scrollBtnTop(d, "scroll-top-btn");
  menuDesplegable(d, "otros");
  responsiveMedia(
    d,
    w,
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&t=478s">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    d,
    w,
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/tLYGqECdSm1F3fQs6">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.6396690403785!2d-70.62570378255616!3d-33.6146526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d82ac5e49f1f%3A0xfd4622ee928b10c0!2sEstero%20Leonera%20480%2C%20Puente%20Alto%2C%208167445%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1659821913900!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveMedia(
    d,
    w,
    "menu",
    "(min-width: 768px)",
    `
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-1">Reloj y Alarma</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-2">Eventos Teclado</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-3">Cuenta Regresiva</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-4">Responsive con JS</a></li>
      

    <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-5">Responsive Tester</a></li><li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-6">Sección
              6</a></li><li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-8">Sección
              8</a></li><li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-9">Sección
              9</a></li><li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-10">Sección
              10</a></li>`,
    `
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-1">Reloj y Alarma</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-2">Eventos Teclado</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-3">Cuenta Regresiva</a></li>
      <li class="contenedor-enlace"><a class="contenedor-enlace__enlace" href="#seccion-4">Responsive con JS</a></li>
      <li id="otros" class="contenedor-enlace"><a class="contenedor-enlace__enlace">Otros</a>
        <ul id="sub-menu" class="sub-menu hidden">
          <!--  -->
          <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-5">Responsive Tester</a></li>
          <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-6">Sección
              6</a></li>
          <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-8">Sección
              8</a></li>
          <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-9">Sección
              9</a></li>
          <li class="contenedor-enlace" data-submenu="1"><a class="contenedor-enlace__enlace" href="#seccion-10">Sección
              10</a></li>

        </ul>
      </li>

    `
  );

  responsiveTester(d, "responsive-tester");
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
