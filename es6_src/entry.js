import p5 from 'p5'
import DrawLine from './models/DrawLine'

const sketch = (p) => {

  var objs = [];
  const objNum = 5;

  p.preload = () => {

  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(0)
    Array(objNum).fill().map((_, i) => {
      objs.push(new DrawLine(p, [p.random(255), p.random(255), p.random(255)], 100, i+1/i+2))
    })
  }

  p.draw = () => {
    //p.background(0)
    objs.forEach((obj) => {
      obj.run()
    })
  }

  p.mouseClicked = () => {
    let i = parseInt(p.random(objNum))
    objs[i].changeColor([p.random(255), p.random(255), p.random(255)])
  }
}

new p5(sketch)
