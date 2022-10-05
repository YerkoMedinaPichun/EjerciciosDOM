const d = document,
  $table = d.querySelector(".crud-table-options"),
  $formOptions = d.querySelector(".crud-form-options"),
  $titleOption = d.querySelector(".crud-title-options"),
  $template = d.getElementById("crud-template-options").content,
  $fragment = d.createDocumentFragment();

const $templateOptionTag = d.getElementById("option-tag").content,
  $fragmentOptionTag = d.createDocumentFragment();

let options;

// const ajax = (options) => {
//   let { url, method, success, error, data } = options;
//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("readystatechange", (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status < 300) {
//       let json = JSON.parse(xhr.responseText);
//       options = json;
//       success(json);
//     } else {
//       let message = xhr.statusText || "Ocurrió un error";
//       error(`Error ${xhr.status}: ${message}`);
//     }
//   });

//   xhr.open(method || "GET", url);
//   xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   xhr.send(JSON.stringify(data));
// };

const getAllOptionsFetch = async () => {
  try {
    let res = await fetch("http://localhost:5555/tags"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    json.forEach((el) => {
      $template.querySelector(".name-option").textContent = el.name;

      $template.querySelector(".edit-option").dataset.id = el.id;
      $template.querySelector(".edit-option").dataset.name = el.name;

      $template.querySelector(".delete-option").dataset.id = el.id;
      $template.querySelector(".delete-option").dataset.name = el.name;

      // =======================

      $templateOptionTag.querySelector(".option-name").textContent = el.name;

      $templateOptionTag.querySelector(".option-name").dataset.id = el.id;

      $templateOptionTag.querySelector(".option-name").dataset.name = el.name;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);

      let $cloneOptionTag = d.importNode($templateOptionTag, true);
      $fragmentOptionTag.appendChild($cloneOptionTag);
    });
    $table.querySelector("tbody").appendChild($fragment);
    d.querySelector(".crud-form-block").appendChild($fragmentOptionTag);
  } catch (error) {
    let message = error.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${error.status}: ${message}</b></p>`
    );
  }
};

// const getAllOptions = () => {
//   ajax({
//     url: "http://localhost:5555/tags",
//     success: (res) => {
//       console.log(res);
//       res.forEach((el) => {
//         $template.querySelector(".name-option").textContent = el.name;

//         $template.querySelector(".edit-option").dataset.id = el.id;
//         $template.querySelector(".edit-option").dataset.name = el.name;

//         $template.querySelector(".delete-option").dataset.id = el.id;
//         $template.querySelector(".delete-option").dataset.name = el.name;

//         // =======================

//         $templateOptionTag.querySelector(".option-name").textContent = el.name;

//         $templateOptionTag.querySelector(".option-name").dataset.id = el.id;

//         $templateOptionTag.querySelector(".option-name").dataset.name = el.name;

//         let $clone = d.importNode($template, true);
//         $fragment.appendChild($clone);

//         let $cloneOptionTag = d.importNode($templateOptionTag, true);
//         $fragmentOptionTag.appendChild($cloneOptionTag);
//       });
//       $table.querySelector("tbody").appendChild($fragment);
//       d.querySelector(".crud-form-block").appendChild($fragmentOptionTag);
//     },
//     error: (e) => {
//       console.log(e);
//       $table.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`);
//     },
//   });
// };

d.addEventListener("DOMContentLoaded", getAllOptionsFetch);

d.addEventListener("submit", async (e) => {
  if (e.target === $formOptions) {
    e.preventDefault();

    if (!e.target.id.value) {
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              name: e.target.name.value,
            }),
          },
          res = await fetch("http://localhost:5555/tags", options),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $formOptions.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${error.status} : ${message}</b></p>`
        );
      }
    } else {
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              name: e.target.name.value,
            }),
          },
          res = await fetch(
            `http://localhost:5555/tags/${e.target.id.value}`,
            options
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $formOptions.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${error.status} : ${message}</b></p>`
        );
      }
    }
  }
});

// d.addEventListener("submit", (e) => {
//   if (e.target === $formOptions) {
//     e.preventDefault();
//     if (!e.target.id.value) {
//       //CREATE - POST

//       ajax({
//         url: "http://localhost:5555/tags",
//         method: "POST",
//         success: (res) => location.reload(),
//         error: (e) =>
//           $formOptions.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`),
//         data: {
//           name: e.target.name.value,
//         },
//       });
//     } else {
//       //UPDATE - PUT
//       ajax({
//         url: `http://localhost:5555/tags/${e.target.id.value}`,
//         method: "PUT",
//         success: (res) => location.reload(),
//         error: (e) =>
//           $formOptions.insertAdjacentHTML("afterend", `<p><b>${e}</b></p>`),
//         data: {
//           name: e.target.name.value,
//         },
//       });
//     }
//   }
// });

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit-option")) {
    $titleOption.textContent = "Editar Opción";
    $formOptions.name.value = e.target.dataset.name;
    $formOptions.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete-option")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id "${e.target.dataset.id}" de nombre "${e.target.dataset.name}"?`
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
            `http://localhost:5555/tags/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        alert(`Error ${error.status}: ${message}`);
      }
    }
  }
});

// d.addEventListener("click", (e) => {
//   if (e.target.matches(".edit-option")) {
//     $titleOption.textContent = "Editar Opción";
//     $formOptions.name.value = e.target.dataset.name;
//     $formOptions.id.value = e.target.dataset.id;
//   }
//   if (e.target.matches(".delete-option")) {
//     let isDelete = confirm(
//       `¿Estás seguro de eliminar el id "${e.target.dataset.id}" de nombre "${e.target.dataset.name}"?`
//     );

//     if (isDelete) {
//       ajax({
//         url: `http://localhost:5555/tags/${e.target.dataset.id}`,
//         method: "DELETE",
//         success: (res) => location.reload(),
//         error: (e) => alert(e),
//       });
//     }
//   }
// });
