// export default function dibujarCanvas(d) {
//   const $canvas = d.getElementById("canvas"),
//     ctx = $canvas.getContext("2d");

//   // ctx.fillStyle = "red";
//   // ctx.beginPath();
//   // ctx.moveTo(150, 200);
//   // ctx.lineTo(250, 200);
//   // ctx.lineTo(200, 114);
//   // ctx.fill();

//   ctx.fillStyle = "blue";
//   // ctx.fillRect(10, 10, 100, 100);
//   ctx.beginPath();
//   ctx.moveTo(150, 200);
//   ctx.lineTo(250, 200);
//   ctx.lineTo(200, 114.4);
//   ctx.fill();
// }

// export function dibujarTrianguloEquilatero(d, x, y, ab) {
//   const $canvas = d.getElementById("canvas"),
//     ctx = $canvas.getContext("2d");
//   let x1 = x + ab;
//   let h = Math.sqrt(Math.pow(ab, 2) - Math.pow(ab / 2, 2));
//   let y1 = y;
//   let x2 = x + ab / 2;
//   let y2 = y - h;
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.fill();
//   ctx.closePath();
// }

let $canvas = document.getElementById("canvas");
let ctx = $canvas.getContext("2d");

export function medidas() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 400);

  ctx.moveTo(50, 0);
  ctx.lineTo(50, 400);

  ctx.moveTo(100, 0);
  ctx.lineTo(100, 400);

  ctx.moveTo(150, 0);
  ctx.lineTo(150, 400);

  ctx.moveTo(200, 0);
  ctx.lineTo(200, 400);

  ctx.moveTo(250, 0);
  ctx.lineTo(250, 400);

  ctx.moveTo(300, 0);
  ctx.lineTo(300, 400);

  ctx.moveTo(350, 0);
  ctx.lineTo(350, 400);

  ctx.moveTo(400, 0);
  ctx.lineTo(400, 400);
  // ---------------------------
  ctx.moveTo(0, 0);
  ctx.lineTo(400, 0);

  ctx.moveTo(0, 50);
  ctx.lineTo(400, 50);

  ctx.moveTo(0, 100);
  ctx.lineTo(400, 100);

  ctx.moveTo(0, 150);
  ctx.lineTo(400, 150);

  ctx.moveTo(0, 200);
  ctx.lineTo(400, 200);

  ctx.moveTo(0, 250);
  ctx.lineTo(400, 250);

  ctx.moveTo(0, 300);
  ctx.lineTo(400, 300);

  ctx.moveTo(0, 350);
  ctx.lineTo(400, 350);

  ctx.moveTo(0, 400);
  ctx.lineTo(400, 400);

  ctx.font = "10pt Arial";
  // ctx.translate(200, 200);
  ctx.fillStyle = "black";
  ctx.fillText("(0)", 0, 12);
  ctx.fillText("(100)", 100, 12);
  ctx.fillText("(200)", 200, 12);
  ctx.fillText("(300)", 300, 12);

  ctx.fillText("(100)", 0, 112);
  ctx.fillText("(200)", 0, 212);
  ctx.fillText("(300)", 0, 312);

  ctx.stroke();
  ctx.closePath();
}

class TrianguloEquilatero {
  constructor(x, y, ab, color) {
    this.x = x;
    this.y = y;
    this.ab = ab;
    this.color = color;
    this.x1 = this.x + ab;
    this.h = Math.sqrt(Math.pow(ab, 2) - Math.pow(ab / 2, 2));
    this.y1 = this.y;
    this.x2 = this.x + ab / 2;
    this.y2 = this.y - this.h;
    this.y3 = this.h / 2;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.fill();
    // ctx.rotate(45);
    ctx.font = "12pt Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`(${this.x},${this.y})`, this.x, this.y);
    ctx.fillText(`(${this.x1},${this.y1})`, this.x1, this.y1);
    ctx.fillText(`(${this.x2},${this.y2})`, this.x2, this.y2);
    ctx.closePath();
    // console.log(this.x, this.y);
    // console.log(this.x1, this.y1);
    // console.log(this.x2, this.y2);
    // console.log(this.x2, this.y - this.y3);
    // console.log(this.h);
    // console.log("------------");
    // console.log(this.x2);
    // console.log(this.y2);
    // console.log(this.y3);
    this.drawCenter(ctx, this.x2, this.y2 + this.y3);
  }
  drawCenter(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.closePath();
  }
  clickTriangulo(xmouse, ymouse) {
    //console.log(xmouse, ymouse);
    const distance = Math.sqrt(
      (xmouse - this.x) * (xmouse - this.x) +
        (ymouse - this.y) * (ymouse - this.y)
    );
    //console.log(distance);
  }
}

export let tEquilatero1 = new TrianguloEquilatero(100, 350, 200, "red");
tEquilatero1.draw(ctx);

$canvas.addEventListener("click", (e) => {
  const rect = $canvas.getBoundingClientRect();
  //console.log(rect);
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  //console.log(`x: ${x} y: ${y}`);
  tEquilatero1.clickTriangulo(x, y);
  //console.log("click canvas");
});

// export let tEquilatero2 = new TrianguloEquilatero(0, 400, 100, "blue");
// tEquilatero2.draw(ctx);

// export let tEquilatero3 = new TrianguloEquilatero(200, 200, 80, "orange");
// tEquilatero3.draw(ctx);
