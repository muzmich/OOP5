import { OOP5 } from "../../src";
import { Component } from './comp/component';

export class App extends OOP5 {
  setup(): void {
    this.components = [
      new Component
    ];
    this.app.createCanvas(400, 400);
    this.app.background(0);
  }

  draw(): void {
    this.components.forEach(component => {
      component.draw();
    });
  }

  keyPressed(event?: KeyboardEvent): void {
    console.log('press in app');
  }

  mouseClicked(event: object): void {
    console.log('click');

  }
}