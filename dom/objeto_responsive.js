export default function responsiveMedia(
  d,
  w,
  id,
  mq,
  mobileContent,
  desktopContent
) {
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
