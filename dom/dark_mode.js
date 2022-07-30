export function darkMode(d, btnClase) {
  const $body = d.querySelector("body");
  const $btnDarkMode = d.querySelector(`.${btnClase}`);

  // const funcionLightMode = () => {};
  const funcionDarkMode = () => {
    $body.classList.toggle("dark-mode");
    d.querySelector(`.${btnClase} #icono-luna`).classList.toggle("hidden");
    d.querySelector(`.${btnClase} #icono-sol`).classList.toggle("hidden");
    if ($body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    }
    if (!$body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "light");
    }
  };

  d.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      e.target.matches(`.${btnClase}`) ||
      e.target.matches(`.${btnClase} .icono`)
    ) {
      funcionDarkMode();
    }
  });

  // d.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   if (
  //     e.target.matches(`.${btnClase}`) ||
  //     e.target.matches(`.${btnClase} .icono`)
  //   ) {
  //     $body.classList.toggle("dark-mode");

  //     d.querySelector(`.${btnClase} #icono-luna`).classList.toggle("hidden");
  //     d.querySelector(`.${btnClase} #icono-sol`).classList.toggle("hidden");
  //   }
  // });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "light") {
      //funcionLightMode();
      funcionDarkMode();
    }
    if (localStorage.getItem("theme") === "dark") {
      funcionDarkMode();
    }
  });
}
