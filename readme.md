# oop5: develop p5 apps with OOP

Tired of working with single-file p5.js sketches?\
This package has a solution for you, providing oop abstraction over p5.js functionality.

Install package

    $ npm i oop5-js

## Almost done!

Configure webpack or just use [my configuration file](https://github.com/muuuzmich/OOP5/blob/master/webpack.config.js). It will bundle your code and setup server with live reload.

## To start application run

    $ npx webpack serve

> If you use my config file, your application will be available at `localhost:9000`

# How to use oop5

### Example of index.ts file

```typescript
import { OOP5 } from "oop5-js";
import { MyComponent } from "./components/MyComponent";

class App extends OOP5 {
  private canvasSize!: {
    height: number;
    width: number;
  };

  /**
   * Function called before setup function.
   *
   * Do not use any p5 related methods here as p5 has not
   * been initialized yet.
   * */
  protected init(): void {
    this.canvasSize = {
      height: 500,
      width: 500,
    };

    this.components = [
      new MyComponent(),
      new MyComponent(),
      new MyComponent(),
      new MyComponent(),
      new MyComponent(),
    ];
  }

  /* This is same as p5.js setup function*/
  protected setup(): void {
    this.app.createCanvas(this.canvasSize.width, this.canvasSize.height);

    this.initComponents();
  }

  /* This will run through components and init them */
  private initComponents() {
    this.components.forEach((component) => {
      component.init();
    });
  }

  /* This is same as p5.js draw function*/
  protected draw(): void {
    this.app.background(0);
    //loop through array of components and draw each of them.
    this.components.forEach((component) => {
      component.draw();
    });
  }
}
// Don't forget to call an instance of App somewhere
new App();
```

### Example of _MyComponent_ file

```typescript
import { BaseComponent } from "oop5-js";

export default class MyComponent extends BaseComponent {
  private diameter = 50;
  private x!: number;
  private y!: number;
  
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

> _Any p5.js methods or enums are available via `this.app` in classes that extends OOP5 or BaseComponent_