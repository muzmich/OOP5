# oop5: develop p5 apps with OOP

Tired of working with single-file p5.js sketches?\
This package has a solution for you, providing oop abstraction over p5.js functionality.

Install oop5 package:

    $ npm i oop5

Install additional webpack packages:

    $ npm i webpack webpack-cli webpack-dev-server html-webpack-plugin

Install ts-loader:

    $ npm i ts-loader

## Almost done!

Configure webpack or just use [my configuration file](https://github.com/muuuzmich/OOP5/blob/master/webpack.config.js). It will bundle your code and setup server with live reload.

## To start application run

    $ npx webpack serve

# How to use oop5

## Example of index.ts file

```typescript
import { OOP5 } from "oop5";
import { MyComponent } from "./components/MyComponent";

class App extends OOP5 {
  private height = 500;
  private widht = 500;

  /* function init called before setup function*/
  protected init(): void {
    this.components = [new MyComponent()];
  }

  /* This are same as p5.js functions*/
  protected setup(): void {
    this.app.createCanvas(this.width, this.height);
  }

  /* This are same as p5.js functions*/
  protected draw(): void {
    this.app.background(0);
    //loop through array of components and draw each of them.
    this.components.forEach((component) => {
      component.draw();
    });
  }
}

new App();
```

> _Any p5.js methods or enums are available via `this.app`_

## Example of _MyComponent_ file

```typescript
import { BaseComponent } from "oop5";

export default class MyComponent extends BaseComponent {
  private diameter = 50;
  private x!: number;
  private y!: number;
  // init() called once component was created
  public init() {
    this.x = this.app.random(0, this.app.width);
    this.y = this.app.random(0, this.app.height);
  }

  public draw(): void {
    this.app.fill("red");
    this.app.circle(this.x, this.y, this.diameter);
  }
}
```
