const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax({
    // method: "GET",
    url: "http://localhost:5555/alumnos",
    success: (res) => {
      console.log(res);
      res.forEach((element) => {
        $template.querySelector(".name").textContent = element.nombre;

        $template.querySelector(".house").textContent = element.casa;

        $template.querySelector(".edit").dataset.id = element.id;
        $template.querySelector(".edit").dataset.name = element.nombre;
        $template.querySelector(".edit").dataset.house = element.casa;

        $template.querySelector(".delete").dataset.id = element.id;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (e) => {
      console.error(e);
      $table.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`);
    },
    // ,data: null,
  });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //CREATE - POST
      ajax({
        url: "http://localhost:5555/alumnos",
        method: "POST",
        success: (res) => location.reload(),
        error: (e) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          casa: e.target.casa.value,
        },
      });
    } else {
      //UPDATE - PUT
      ajax({
        url: `http://localhost:5555/alumnos/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (e) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          casa: e.target.casa.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    //console.log("editar");
    $title.textContent = "Editar Alumno";
    $form.nombre.value = e.target.dataset.name;
    $form.casa.value = e.target.dataset.house;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    //console.log("eliminar");
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      ajax({
        url: `http://localhost:5555/alumnos/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (e) => alert(e),
      });
    }
  }
});
