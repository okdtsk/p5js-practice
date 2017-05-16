export default class DrawLine {
  constructor(p, color, speed, ratio = 1) {
    this.p = p
    this.color = color
    this.speed = speed
    this.ratio = ratio
    this.w = this.p.width / 2
    this.h = this.p.height / 2
  }

  changeColor(color) {
    this.color = color
  }

  run() {
    this.p.stroke(this.color)
    this.p.line(
        this.w + this.p.sin(this.p.frameCount * 0.0001 * this.speed) * this.w,
        this.h + this.p.sin(this.p.frameCount * 0.0001 * this.speed * this.ratio) * this.h,
        this.w + this.p.sin((this.p.frameCount + 1) * 0.0001 * this.speed) * this.w,
        this.h + this.p.sin((this.p.frameCount + 1) * 0.0001 * this.speed * this.ratio) * this.h)
  }
}