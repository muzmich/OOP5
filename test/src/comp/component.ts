import { P5Component } from '../../../src';

export class Component extends P5Component {
  private x;
  private y;
  private color: [number, number, number] = [255, 0, 0];

  constructor() {
    super();
    this.x = this.app.random(0, this.app.width);
    this.y = this.app.random(0, this.app.height);
  }

  draw(): void {
    this.app.fill.call(this.app, this.color);
    this.app.circle(this.x, this.y, 100);
  }

  keyPressed(event?: KeyboardEvent): void {
    console.log('key pressed in component');
  }
}