let p5_rubbushImg
let p5_clickCount = 0;
let p5_clickCountMax = 100
let p5_maskDom

function preload() {
  p5_rubbushImg = loadImage('assets/img/portfolio/rubbish.jpg')
}

function setup() {
  let canvasWrapDom = document.getElementById('p5-canvas-wrap')
  let canvasDom = document.getElementById('p5-canvas')
  let w = min(canvasWrapDom.clientWidth, 600)
  createCanvas(w, w, P2D, canvasDom);
  cursor(HAND)
  p5_maskDom = document.querySelector('.mask')
  let closeDom = p5_maskDom.querySelector('.close')
  closeDom.onclick = () => {
    p5_maskDom.style.display = 'none'
  }
}

function draw() {
  background(220);
  image(p5_rubbushImg, 0, 0, width, height);

  noStroke()
  textAlign(CENTER)
  textSize(64)
  fill(255);
  text(p5_clickCount + ' / ' + p5_clickCountMax, 2, height / 2 + 2, width, 70);
  fill(237, 91, 91);
  text(p5_clickCount + ' / ' + p5_clickCountMax, 0, height / 2, width, 70);
}

function mousePressed(e) {
  if (e.target.id == 'p5-canvas') {
    if (p5_clickCount >= p5_clickCountMax) {
      showImg();
    } else {
      p5_clickCount++
    }
  }
}

function showImg() {
  p5_maskDom.style.display = 'block'
}