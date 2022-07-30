export function darkMode(d, btnClase) {
  const $body = d.querySelector("body");
  const $btnDarkMode = d.querySelector(`.${btnClase}`);

  d.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      e.target.matches(`.${btnClase}`) ||
      e.target.matches(`.${btnClase} .icono`)
    ) {
      $body.classList.toggle("dark-mode");

      d.querySelector(`.${btnClase} #icono-luna`).classList.toggle("hidden");
      d.querySelector(`.${btnClase} #icono-sol`).classList.toggle("hidden");
      // if (!$body.classList.contains("dark-mode")) {

      //   // if (
      //   //   !d
      //   //     .querySelector(".dark-mode-btn #icono-luna")
      //   //     .classList.contains("hidden")
      //   // ) {
      //   //   d.querySelector(`.${$btnDarkMode} #icono-luna`).classList.toggle(
      //   //     "hidden"
      //   //   );
      //   //   d.querySelector(`.${$btnDarkMode} #icono-sol`).classList.toggle(
      //   //     "hidden"
      //   //   );
      //   // }
      // }
    }
  });
}
