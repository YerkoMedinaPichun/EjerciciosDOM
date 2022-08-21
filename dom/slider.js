export function funcionesSliderCarrusel() {
  //slider(id,sliderSection)
  slider("slider", ".slider__section");
  // carrusel("carrusel", ".carrusel__section");
}

function slider(id, section) {
  const $slider = document.getElementById(id);
  let $sliderSection = document.querySelectorAll(section);
  let $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

  const $btnLeft = document.getElementById("btn-left");
  const $btnRight = document.getElementById("btn-right");

  $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);

  $btnRight.addEventListener("click", (e) => {
    next($slider, section);
  });
  $btnLeft.addEventListener("click", (e) => {
    previous($slider);
  });
  // if (id === "carrusel") {
  //   setInterval((e) => {
  //     next($slider);
  //   }, 3000);
  // }
}

function carrusel(id, section) {
  const $carrusel = document.getElementById(id);
  let $carruselSection = document.querySelectorAll(section);
  let $carruselSectionLast = $carruselSection[$carruselSection.length - 1];
  console.log($carrusel);
  $carrusel.insertAdjacentElement("afterbegin", $carruselSectionLast);

  setInterval((e) => {
    next($carrusel, section);
  }, 3000);
}

// export function slider(id,section) {
//   const $slider = document.getElementById("slider");
//   let $sliderSection = document.querySelectorAll(".slider__section");
//   let $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

//   const $btnLeft = document.getElementById("btn-left");
//   const $btnRight = document.getElementById("btn-right");

//   $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);

//   $btnRight.addEventListener("click", (e) => {
//     next($slider);
//   });
//   $btnLeft.addEventListener("click", (e) => {
//     previous($slider);
//   });
//   //auto
//   // setInterval((e) => {
//   //   next($slider);
//   // }, 3000);
// }

function next(slider, section) {
  let $sliderSectionFirst = document.querySelectorAll(section)[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", $sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function previous(slider) {
  let $sliderSection = document.querySelectorAll(".slider__section");
  let $sliderSectionLast = $sliderSection[$sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", $sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}
