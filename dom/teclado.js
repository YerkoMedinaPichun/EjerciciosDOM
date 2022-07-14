let x = 0;
let y = 0;

export function moverBola(d, e, lienzo, objeto) {
  const $objeto = d.getElementById(objeto),
    $lienzo = d.getElementById(lienzo),
    limiteLienzo = $lienzo.getBoundingClientRect(),
    limiteObjeto = $objeto.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(limiteObjeto, limiteLienzo);
  switch (e.keyCode) {
    case 37:
      if (limiteObjeto.left > limiteLienzo.left + 10) {
        e.preventDefault();
        x--;
      }
      break;

    case 38:
      if (limiteObjeto.top > limiteLienzo.top + 10) {
        e.preventDefault();
        y--;
      }
      break;

    case 40:
      if (limiteObjeto.bottom < limiteLienzo.bottom - 10) {
        e.preventDefault();
        y++;
      }
      break;

    case 39:
      if (limiteObjeto.right < limiteLienzo.right - 10) {
        e.preventDefault();
        x++;
      }

      break;
    default:
      break;
  }
  $objeto.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function acortadores(d, e) {
  // console.log(e.type);
  // console.log(e);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.altKey);
  // console.log(e.shiftKey);
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un aviso con el teclado");
  }
  // if (e.key === "ArrowDown") {
  //   console.log("Abajo");
  //   console.log("-----------------------");
  //   console.log("Top");
  //   console.log(coordenadas.top);
  //   console.log("-----------------------");
  //   console.log("Bottom");
  //   console.log(coordenadas.bottom);
  //   console.log("-----------------------");
  //   console.log("Left");
  //   console.log(coordenadas.left);
  //   console.log("-----------------------");
  //   console.log("Right");
  //   console.log(coordenadas.right);
  //   console.log("-----------------------");
  //   console.log("Width");
  //   console.log(coordenadas.width);
  //   console.log("-----------------------");
  //   console.log("Height");
  //   console.log(coordenadas.height);
  //   console.log("-----------------------");
  // }
}
