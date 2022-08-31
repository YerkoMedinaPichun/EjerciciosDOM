const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5555/alumnos"),
      json = await res.json();

    //Si el parámetro ok de la respuesta viene en falso, arrojo un mensaje de error
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log(json);

    json.forEach((element) => {
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
  } catch (error) {
    let message = error.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${error.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      //console.log("envio de formulario para crear");
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              casa: e.target.casa.value,
            }),
          },
          res = await fetch("http://localhost:5555/alumnos", options),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${error.status}: ${message}</b></p>`
        );
      }
    } else {
      //console.log("Envio de formulario para editar");
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              casa: e.target.casa.value,
            }),
          },
          res = await fetch(
            `http://localhost:5555/alumnos/${e.target.id.value}`,
            options
          ),
          json = await res.json();

        if (res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error: ${error.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  //console.log(e.target);
  if (e.target.matches(".edit")) {
    //console.log("edit");
    $title.textContent = "Editar Alumno";
    $form.nombre.value = e.target.dataset.name;
    $form.casa.value = e.target.dataset.house;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    // console.log("delete");
    // console.log(e.target.dataset.id);
    let isDelete = confirm(
      `Estas seguro que quieres eliminar el id: ${e.target.dataset.id}`
    );

    if (isDelete) {
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await fetch(
            `http://localhost:5555/alumnos/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();

        if (res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        // console.log("Ocurrio un error");
        let message = error.statusText || "Ocurrió un error";
        alert(`Error ${error.status}: ${message}`);
      }
    }
  }
});
