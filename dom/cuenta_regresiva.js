export function cuentaRegresiva(d, id, fechaFinal, mensaje) {
  const fecha = new Date(fechaFinal).getTime();
  const $tiempo = d.getElementById(id);

  let tiempoRestante = setInterval(() => {
    let fechaHoy = new Date().getTime();
    let fechaCalculada = fecha - fechaHoy;
    let dias = Math.floor(fechaCalculada / (1000 * 60 * 60 * 24)),
      horas = Math.floor(
        (fechaCalculada % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutos = Math.floor((fechaCalculada % (1000 * 60 * 60)) / (1000 * 60)),
      segundos = Math.floor((fechaCalculada % (1000 * 60)) / 1000);

    // let semanas = Math.floor(
    //   (fecha / 1000 / 60 / 60 / 24 / 7 / 4 -
    //     fechaHoy / 1000 / 60 / 60 / 24 / 7 / 4) %
    //     (fecha / 1000 / 60 / 60 / 24 / 7 - fechaHoy / 1000 / 60 / 60 / 24 / 7)
    // );
    $tiempo.textContent = `Quedan ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;
    // console.log(`Quedan ${meses} Meses o ${semanas} Semanas`);
  }, 1000);
}
