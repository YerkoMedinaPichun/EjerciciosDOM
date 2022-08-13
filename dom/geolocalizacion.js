export default function getGeolocation(d, n, id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  const success = (position) => {
    console.log(position);
    let coords = position.coords;
    $id.innerHTML = `
    <p>Tú posición actual es:</p>
    <ul>
      <li>Latitud:<mark><b>${coords.latitude}</b></mark></li>
      <li>Longitud:<mark><b>${coords.longitude}</b></mark></li>
      <li>Precisión:<mark><b>${coords.accuracy} metros</b></mark></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error: ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(success, error, options);
}
