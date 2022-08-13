export default function webCam(d, n, id) {
  const $video = d.getElementById(id);
  //console.log(n.mediaDevices.getUserMedia);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // console.log(stream);
        $video.srcObject = stream;
        $video.play(); //necesario para que no quede como foto, si no como video
      })
      .catch((error) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>Sucedio el siguiente error: ${error}</mark></p>`
        );
        // console.log(`Sucedio el siguiente error: ${error}`);
      });
  }
}
