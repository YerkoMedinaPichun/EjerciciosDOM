export function SearchCard(props) {
  let { id, title, _embedded } = props;

  let slug = _embedded.self[0].slug;
  let img = _embedded.self[0].featured_media_src_url
    ? _embedded.self[0].featured_media_src_url
    : "/spa/app/assets/imagen-no-disponible.jpg";

  console.log(_embedded.self[0].featured_media_src_url);

  return `
    <article class="post-card">
      <h2>${title}</h2>
      <img src="${img}" alt="${title}">
      <p>
        <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
      </p>
    </article>
  `;
}
