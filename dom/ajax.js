//XMLHttpRequest

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

//Fetch API

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      json.forEach((user) => {
        const $li = document.createElement("LI");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((error) => {
      // console.log(error);
      let message = xhr.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${error.status} : ${message}`;
    });
  // .finally(console.log("Esto se ejecuta independientemente"));
})();

//Fetch con Async Await
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      // console.log(res, json);
      // if(!res.ok){
      //   throw new Error("Ocurrio un error al solicitar los datos")
      // }
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((user) => {
        const $li = document.createElement("LI");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (error) {
      // console.log(`Estoy en el catch`, e);
      let message = error.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${error.status} : ${message}`;
    } finally {
      console.log("Esto se ejecuta indp del try catch");
    }
  }

  getData();
})();

//Axios
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      let json = res.data;
      json.forEach((user) => {
        const $li = document.createElement("LI");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((error) => {
      // console.log("Estamos en el catch", error.response);
      let message = error.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${error.response.status} : ${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecuta siempre");
    });
})();

//Axios + Async
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((user) => {
        const $li = document.createElement("LI");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (error) {
      let message = error.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${error.response.status} : ${message}`;
    } finally {
      console.log("Esto se ejecuta siempre");
    }
  }

  getData();
})();
