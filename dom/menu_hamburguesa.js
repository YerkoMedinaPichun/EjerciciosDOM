//------------------------------------------------------------------------
// export default function funcionesHamburguerMenu(){

// }
//contenedor-btn-menu = panelBtn, menu = panel
export default function funcionesMenuHamburguer() {
  const d = document;
  hamburguerMenu(d, "btn-menu", "menu", "contenedor-enlace");
  // detectarAnchoPantalla(d, "contenedor-btn-menu", "btn-menu", "menu");
}

function hamburguerMenu(d, btnMenu, menu, menuLink) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btnMenu}`)) {
      d.getElementById(btnMenu).classList.toggle("icono--encendido");
      d.getElementById(menu).classList.toggle("menu--encendido");
    }

    if (
      e.target.matches(`.${menuLink}`) ||
      e.target.matches(".contenedor-enlace__enlace")
    ) {
      d.getElementById(btnMenu).classList.remove("icono--encendido");
      d.getElementById(menu).classList.remove("menu--encendido");
    }
  });
}

//------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const $anchoPantalla = window.innerWidth,
//     $contenedorBtnMenu = document.getElementById("contenedor-btn-menu"),
//     $botonMenu = document.getElementById("btn-menu"),
//     $menu = document.getElementById("menu"),
//     $main = document.querySelector(".main");

//   cargarConfiguracionInicial($anchoPantalla, $contenedorBtnMenu, $menu);
//   detectarAnchoPantalla($contenedorBtnMenu, $menu);
//   menuResponsive($botonMenu, $menu);
//   // menuSticky($contenedorBtnMenu, $menu, $main);
// });

// function cargarConfiguracionInicial(anchoPantalla, contenedorBtnMenu, menu) {
//   //-----------------------------------------------------
//   // const $anchoPantalla = window.innerWidth,
//   //   $contenedorBtnMenu = document.getElementById("contenedor-btn-menu"),
//   //   // $botonMenu = document.getElementById("btn-menu"),
//   //   $menu = document.getElementById("menu");

//   // if ($anchoPantalla >= 768) {
//   //   if (!$contenedorBtnMenu.classList.contains("ocultar")) {
//   //     $contenedorBtnMenu.classList.add("ocultar");
//   //   }
//   //   if ($menu.classList.contains("menu--apagado")) {
//   //     $menu.classList.add("menu--encendido");
//   //     $menu.classList.remove("menu--apagado");
//   //   }
//   // } else {
//   // }
//   //-----------------------------------------------------

//   if (anchoPantalla >= 768) {
//     if (!contenedorBtnMenu.classList.contains("ocultar")) {
//       contenedorBtnMenu.classList.add("ocultar");
//     }
//     if (menu.classList.contains("menu--apagado")) {
//       menu.classList.add("menu--encendido");
//       menu.classList.remove("menu--apagado");
//     }
//     menu.style.top = "0";
//     menu.style.position = "relative";
//   } else {
//   }
// }

// function detectarAnchoPantalla(contenedorBtnMenu, menu) {
//   // const $contenedorBtnMenu = document.getElementById("contenedor-btn-menu"),
//   //   $menu = document.getElementById("menu");

//   // window.addEventListener("resize", (e) => {
//   //   if (window.innerWidth >= 768) {
//   //     if (!$contenedorBtnMenu.classList.contains("ocultar")) {
//   //       $contenedorBtnMenu.classList.add("ocultar");
//   //       $menu.classList.add("menu--encendido");
//   //       $menu.classList.remove("menu--apagado");
//   //     }
//   //   } else {
//   //     $contenedorBtnMenu.classList.remove("ocultar");
//   //     $menu.classList.add("menu--apagado");
//   //     $menu.classList.remove("menu--encendido");
//   //   }
//   // });

//   window.addEventListener("resize", (e) => {
//     if (window.innerWidth >= 768) {
//       if (!contenedorBtnMenu.classList.contains("ocultar")) {
//         contenedorBtnMenu.classList.add("ocultar");
//         menu.classList.add("menu--encendido");
//         menu.classList.remove("menu--apagado");
//       }
//     } else {
//       contenedorBtnMenu.classList.remove("ocultar");
//       menu.classList.add("menu--apagado");
//       menu.classList.remove("menu--encendido");
//     }
//   });
// }

//------------------------------------------------------------------------

// function menuResponsive(botonMenu, menu) {
//   //----------------------------------------------------------------------
//   // const $botonMenu = document.getElementById("btn-menu"),
//   //   $menu = document.getElementById("menu");

//   // $botonMenu.addEventListener("click", () => {
//   //   $botonMenu.classList.toggle("contenedor-icono__icono--encendido");
//   //   $botonMenu.classList.toggle("contenedor-icono__icono--apagado");
//   //   $menu.classList.toggle("menu--encendido");
//   //   $menu.classList.toggle("menu--apagado");
//   // });
//   //----------------------------------------------------------------------

//   botonMenu.addEventListener("click", () => {
//     botonMenu.classList.toggle("contenedor-icono__icono--encendido");
//     botonMenu.classList.toggle("contenedor-icono__icono--apagado");
//     menu.classList.toggle("menu--encendido");
//     menu.classList.toggle("menu--apagado");
//   });
// }

//------------------------------------------------------------------------

// function menuSticky(contenedorBtnMenu, menu, main) {
//   //--------------------------------------------------------------------
//   // const $anchoPantalla = window.innerWidth,
//   //   $contenedorBtnMenu = document.getElementById("contenedor-btn-menu"),
//   //   $menu = document.getElementById("menu"),
//   //   $main = document.querySelector(".main");

//   // window.addEventListener("scroll", (e) => {
//   //   console.log(window.scrollY);
//   //   if (window.scrollY >= 130) {
//   //     // $contenedorBtnNav.style.position = "fixed";
//   //     $contenedorBtnMenu.classList.add("contenedor-icono--fixed");
//   //     $menu.style.position = "fixed";
//   //     $main.style.paddingTop = "7rem";
//   //   } else {
//   //     // $contenedorBtnNav.style.position = "relative";
//   //     $contenedorBtnMenu.classList.remove("contenedor-icono--fixed");
//   //     $menu.style.position = "absolute";
//   //     $main.style.paddingTop = "0rem";
//   //   }
//   // });
//   //--------------------------------------------------------------------

//   window.addEventListener("scroll", (e) => {
//     if (window.innerWidth < 768) {
//       if (window.scrollY >= 130) {
//         // $contenedorBtnNav.style.position = "fixed";
//         contenedorBtnMenu.style.position = "fixed";
//         contenedorBtnMenu.style.top = "0";
//         menu.style.position = "fixed";
//         main.style.paddingTop = "7rem";
//         /*
//       position: fixed;
//       top: 0;
//       */
//       } else {
//         // $contenedorBtnNav.style.position = "relative";
//         contenedorBtnMenu.style.position = "relative";

//         menu.style.position = "absolute";
//         main.style.paddingTop = "0rem";
//       }
//     } else {
//       if (window.scrollY >= 85) {
//         console.log(menu);
//         menu.style.position = "fixed";
//         menu.style.top = "0";
//         main.style.paddingTop = "11rem";
//       } else {
//         menu.style.position = "relative";
//         //menu.style.top = "0";
//         main.style.paddingTop = "0rem";
//       }
//     }
//   });
// }

//------------------------------------------------------------------------
