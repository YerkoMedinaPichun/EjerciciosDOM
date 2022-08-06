export function menuDesplegable(d, id) {
  d.addEventListener("click", (e) => {
    if (window.innerWidth >= 768) {
      if (e.target.matches(`#${id}`) || e.target.matches(`#${id} a`)) {
        d.getElementById("sub-menu").classList.toggle("hidden");
      }
    }
    if (window.innerWidth < 768) {
    }
  });
}
