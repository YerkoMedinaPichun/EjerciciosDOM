export function relojDigital(d, reloj, iniciarReloj, detenerReloj) {
  let relojTemporizador;
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${iniciarReloj}`)) {
      relojTemporizador = setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        d.getElementById(reloj).textContent = hora;
      }, 1000);
      d.getElementById(iniciarReloj).disabled = true;
    }

    if (e.target.matches(`#${detenerReloj}`)) {
      clearInterval(relojTemporizador);
      d.getElementById(reloj).textContent = "";
      d.getElementById(iniciarReloj).disabled = false;
    }
  });
}

export function alarma(d, alarma, iniciarAlarma, detenerAlarma) {
  let alarmaTemporizador;
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${iniciarAlarma}`)) {
      alarmaTemporizador = setTimeout(() => {
        // d.getElementById(alarma).setAttribute("autoplay", "");
        d.getElementById(alarma).play();
        d.getElementById(alarma).loop = true;
        d.getElementById(iniciarAlarma).disabled = true;
      }, 100);
    }

    if (e.target.matches(`#${detenerAlarma}`)) {
      clearTimeout(alarmaTemporizador);
      d.getElementById(alarma).pause();
      d.getElementById(alarma).currentTime = 0;
      d.getElementById(iniciarAlarma).disabled = false;
    }
  });
}
