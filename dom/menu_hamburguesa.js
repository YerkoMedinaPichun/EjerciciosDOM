//------------------------------------------------------------------------
// export default function funcionesHamburguerMenu(){

// }
//contenedor-btn-menu = panelBtn, menu = panel
export default function funcionesMenuHamburguer() {
  const d = document;

  hamburguerMenu(d, "btn-menu", "menu", "contenedor-enlace__enlace");
}

export function navAdaptable(d, w, mq, contenedorBtnMenu, btnMenu, menu) {
  let breakpoint = w.matchMedia(mq);
  const $submenu = d.querySelectorAll(
    "#sub-menu .contenedor-enlace[data-submenu='1']"
  );
  const $otros = d.getElementById("otros");
  const $menu = d.getElementById("menu");
  /*----------------------------------------------*/
  //Creando enlace Otros con
  const $li = d.createElement("LI");
  const $a = d.createElement("A");
  const $ul = d.createElement("UL");
  const $li_enlaces = d.querySelectorAll(`li[data-submenu="1"]`);
  $li.setAttribute("id", "otros");
  $li.classList.add("contenedor-enlace");

  $a.classList.add("contenedor-enlace__enlace");
  $a.textContent = "Otros";

  $ul.setAttribute("id", "sub-menu");
  $ul.classList.add("sub-menu");
  $ul.classList.add("hidden");
  /*------------------------------------------- */
  const nav = (e) => {
    if (e.matches) {
      console.log("desktop");
      if (d.getElementById("otros") !== null) {
        $menu.removeChild($otros);
        for (let i = 0; i < $submenu.length; i++) {
          $menu.insertAdjacentElement("beforeend", $submenu[i]);
        }
      }
      /*
        Si el dispositivo es igual o mayor a 768px entonces agregamos la clase "ocultar"
      */
      if (!d.getElementById(contenedorBtnMenu).classList.contains("ocultar")) {
        d.getElementById(contenedorBtnMenu).classList.add("ocultar");
      }

      /*
        Si el dispositivo es mayor a 768px y no posee la clase "menu--encendido", entonces se la agregamos
      */
      if (!d.getElementById(menu).classList.contains("menu--encendido")) {
        d.getElementById(menu).classList.add("menu--encendido");
      }
      // <li id="otros" class="contenedor-enlace"><a class="contenedor-enlace__enlace">Otros</a>
      //   <ul id="sub-menu" class="sub-menu ">

      //   </ul>
      // </li>
      if (!d.getElementById("otros")) {
        $li_enlaces.forEach((enlace) => {
          $ul.appendChild(enlace);
        });

        $li.appendChild($a);
        $li.appendChild($ul);

        d.getElementById("menu").appendChild($li);
        // console.log($li);
        // console.log($li_enlaces);
      }
    } else {
      console.log("mobile");
      if (!d.getElementById(contenedorBtnMenu).classList.contains("ocultar")) {
        d.getElementById(contenedorBtnMenu).classList.add("ocultar");
      }

      /*
        Si el dispositivo es menor a 768px y no posee la clase "menu--encendido", entonces se la agregamos
      */
      if (!d.getElementById(menu).classList.contains("menu--encendido")) {
        d.getElementById(menu).classList.add("menu--encendido");
      }
      /*
        Si el dispositivo es menor a 768px entonces quitamos la clase "ocultar"
      */
      if (d.getElementById(contenedorBtnMenu).classList.contains("ocultar")) {
        d.getElementById(contenedorBtnMenu).classList.remove("ocultar");
      }
      /*
        Si el btnMenu No tiene la clase "icono--encendido" entonces,
        quiere decir que el btnMenu está apagado, por lo tanto, si está apagado, compruebo si el menu está encendido. Si el btnMenu está apagado y el menu está encendido, entonces "apago el menu"
      */
      if (!d.getElementById(btnMenu).classList.contains("icono--encendido")) {
        if (d.getElementById(menu).classList.contains("menu--encendido")) {
          d.getElementById(menu).classList.remove("menu--encendido");
        }
      }
      /*
        Si el menu tiene la clase "menu--encendido" entonces,
        quiere decir que el menu está visible, por lo tanto, si está encendido, compruebo si el btnMenu está apagado. Si el menu está encendido y el btnMenu está apagado, entonces "enciendo el icono"
      */

      if (d.getElementById(menu).classList.contains("menu--encendido")) {
        if (!d.getElementById(btnMenu).classList.add("icono--encendido")) {
          d.getElementById(btnMenu).classList.add("icono--encendido");
        }
      }
      console.log(d.getElementById("otros"));
      if (d.getElementById("otros")) {
        d.getElementById("menu").removeChild(d.getElementById("otros"));
      }
      $li_enlaces.forEach((enlace) => {
        d.getElementById("menu").appendChild(enlace);
      });
    }
  };
  breakpoint.addEventListener("change", nav);
  nav(breakpoint);
}

function hamburguerMenu(d, btnMenu, menu, menuLink) {
  d.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      if (e.target.matches(`#${btnMenu}`)) {
        d.getElementById(btnMenu).classList.toggle("icono--encendido");
        d.getElementById(menu).classList.toggle("menu--encendido");
      }

      if (e.target.matches(`.${menuLink}`)) {
        d.getElementById(btnMenu).classList.remove("icono--encendido");
        d.getElementById(menu).classList.remove("menu--encendido");
      }
    }
  });
}
