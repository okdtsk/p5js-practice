import p5 from 'p5'
import MovingBall from './models/2d'

const sketch = (p) => {

  var b1;

  p.preload = () => {

  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(0)
    p.noStroke()

    b1 = new MovingBall(p, 2, 1000, 1.2);
  }

  p.draw = () => {
    //p.background(0)
    b1.run()
  }
}

new p5(sketch)
