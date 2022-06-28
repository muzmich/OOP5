# oop5: develop p5 apps with OOP

Tired of working with single-file p5.js sketches?\
This package has a solution for you, providing oop abstraction over p5.js functionality.

Install package

    $ npm i oop5-js

## Almost done!

Configure webpack or just use [my configuration file](https://github.com/muuuzmich/OOP5/blob/master/example/webpack.config.js). It will bundle your code and setup server with live reload.

## To start application run

    $ npx webpack serve

> If you use my config file, your application will be available at `localhost:9000`

# How to use oop5

### Example of _index.ts_ file

```typescript
import { OOP5 } from "oop5-js";
import { Component } from "./components/MyComponent";

class App extends OOP5 {
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
}

// Don't forget to call an instance of App somewhere
new App();
```

### Example of _MyComponent_ file

```typescript
import { P5Component } from "oop5-js";

export class Component extends P5Component {
  private x;
  private y;

  constructor() {
    super();
    this.x = this.app.random(0, this.app.width);
    this.y = this.app.random(0, this.app.height);
  }

  draw(): void {
    this.app.circle(this.x, this.y, 100);
  }
}
```

> _Any p5.js methods or enums are available via `this.app` in classes that extends OOP5 or P5Component_

# Event handling
### Currently package has native support of next events:
## Keyboard:
  - keyPressed
  - keyReleased
  - keyIsDown
  - keyTyped
## MouseActions:
  - mouseMoved
  - mouseDragged
  - mousePressed
  - mouseReleased
  - mouseClicked
  - doubleClicked
  - mouseWheel
## Example usage: 
```typescript
class App extends OOP5 {
  keyPressed(event?: KeyboardEvent): void {
    console.log('catch in app', event);
  }
}

class Component extends P5Component {
  keyPressed(event?: KeyboardEvent): void {
    console.log('catch in component', event);
  }
}
```
> In the _example above_ `keyPressed` handler will be fired twice whenever you press key - as it catches event globally inside `App` and for each of the components

# ⚠️ For any _not yet supported_ events supported by `p5` you can set them directly:
```typescript
class App extends OOP5 {
  setup(): void {
    this.app.deviceTurned = this.deviceTurned;
  }

  deviceTurned(){
    console.log('turn');
  }
}
```