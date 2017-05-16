function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
  background(0)
  for (var i = 0; i < 100; i++) {
    translate(sin(frameCount * 0.1) * 20, sin(frameCount * 0.1) * 30, i * 0.1)
    rotateZ(frameCount * 0.002)
    //push()
    sphere(2, 10, 100)
    //pop()
  }
}