export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $styles.innerHTML = `
  .contact-form {
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }

    .contact-form>* {
      padding: 0.5rem;
      margin: 1rem auto;
      display: block;
      width: 100%;
    }

    .contact-form textarea {
      resize: none;
    }

    .contact-form legend,
    .contact-form-response {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1.8rem;
      font-family: sans-serif;
    }

    .contact-form input[type="submit"] {
      width: 50%;
      font-weight: bold;
      cursor: pointer;
    }

    .contact-form *::placeholder {
      color: var(--color-gris-oscuro);
    }

    .contact-form [required]:valid {
      border: thin solid var(--color-primario);
    }

    .contact-form [required]:invalid {
      border: thin solid #b71c1c;
    }

    .contact-form-error {
      margin-top: -1rem;
      font-size: 80%;
      background-color: #b71c1c;
      color: var(--color-blanco);
      transition: all 0.8s ease;
    }

    .contact-form-error.is-active {
      display: block;
      animation: show-message 1s normal 0s ease-out both;
    }

    .contact-form-loader {
      text-align: center;
    }

    .none {
      display: none;
    }

    @keyframes show-message {
      0% {
        visibility: hidden;
        opacity: 0;
      }

      100% {
        visibility: visible;
        opacity: 1;
      }
    }
  `;

  $form.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre"
      title="Nombre solo acepta letras y espacios en blanco" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$">
    <input type="email" name="email" placeholder="Escribe tu email" title="Email Incorrecto"
      pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

    <input type="text" name="subject" placeholder="Asunto a tratar" required title="El Asunto es requerido">
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" required
      data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres"></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
      <img src="../assets/ball-triangle.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
      <p>Los datos han sido enviados</p>
    </div>
    `;

  function validationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");
    //console.log($inputs);

    $inputs.forEach((input) => {
      const $span = d.createElement("SPAN");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        // console.log($input, pattern);

        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", (e) => {
      e.preventDefault();

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch("https://formsubmit.co/ajax/yerkomedina1999@gmail.com", {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json'
        // },
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText ||
            "Ocurrió un error al enviar, intentalo nuevamente";
          $response.innerHTML = `<p>Error ${err.status} : ${message}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000);
        });
    });
  }

  setTimeout(() => {
    validationsForm();
  }, 100);

  return $form;
}
