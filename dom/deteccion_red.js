export default function networkStatus(d, w, n) {
  const isOnline = () => {
    const $div = d.createElement("DIV");
    if (n.onLine) {
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online");
      if ($div.classList.contains("offline")) {
        $div.classList.remove("offline");
      }
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
      if ($div.classList.contains("online")) {
        $div.classList.remove("online");
      }
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2000);
  };

  w.addEventListener("online", (e) => {
    isOnline();
  });
  w.addEventListener("offline", (e) => {
    isOnline();
  });
}
