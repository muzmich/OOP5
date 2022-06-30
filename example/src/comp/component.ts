import { P5Component } from '../../../src';

export class Component extends P5Component {
  public x;
  public y;

  constructor() {
    super();
    this.x = this.app.random(0, this.app.width);
    this.y = this.app.random(0, this.app.height);
  }

  draw(): void {
    this.app.fill('red');
    this.app.circle(this.x, this.y, 100);
  }

  keyPressed() {
    console.log('key pressed in comp');
  }
}