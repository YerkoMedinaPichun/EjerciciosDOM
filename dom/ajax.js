(() => {
  //paso 1: crear una instancia del objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //paso 2: crear el evento (readystatechange detecta cualquier cambio)
  xhr.addEventListener("readystatechange", (e) => {
    //que la programacion se ejecute cuando el readyState sea 4
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("éxito");
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      //console.log(json);
      json.forEach((user) => {
        const $li = document.createElement("LI");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
    //console.log(xhr);
  });
  //abrimos especificando el verbo http (GET-POST-etc) y la url
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //y enviamos
  xhr.send();
})();
