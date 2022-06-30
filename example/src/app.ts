import { OOP5, P5Component } from "../../src";
import { ComponentList } from '../../src/core/componentList';
import { Component } from './comp/component';

export class App extends OOP5 {
  setup(): void {
    this.app.createCanvas(400, 400);
    this.app.background(0);

    this.components.set([
      new Component
    ]);
  }

  draw(): void {
    this.app.background(0);

    this.components.draw();
  }

  keyPressed(e: KeyboardEvent) {
    //New
    if (e.key === 'n') {
      this.components.add(new Component);
    }
    //Delete all
    if (e.key === 'd') {
      this.components.set([])
    }
  }
}