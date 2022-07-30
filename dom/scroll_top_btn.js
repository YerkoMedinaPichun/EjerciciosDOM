const w = window;
export function scrollBtnTop(d, btnClase) {
  const $scrollBtn = d.querySelector(`.${btnClase}`);

  w.addEventListener("scroll", (e) => {
    // console.log(w.pageYOffset);
    // console.log(window.scrollY);
    // console.log($scrollBtn);
    if (window.scrollY >= 990) {
      if ($scrollBtn.classList.contains("hidden")) {
        $scrollBtn.classList.remove("hidden");
      }
    } else {
      if (!$scrollBtn.classList.contains("hidden")) {
        $scrollBtn.classList.add("hidden");
      }
    }
  });

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(`.${btnClase}`) ||
      e.target.matches(`.${btnClase} .icono`)
    ) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
