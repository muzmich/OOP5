# oop5: develop p5 apps with OOP and typescript

Tired of working with single-file p5.js sketches?\
This package has a solution for you!\
Providing oop abstraction over p5.js functionality and cool features.

## Install package

    $ npm i oop5-js

## Almost done!

Configure webpack or just use [my configuration file](https://github.com/muuuzmich/OOP5/blob/master/example/webpack.config.js). It will bundle your code, create html file and setup server with live reload.

## To start application run

    $ npx webpack serve

> If you use my config file, your application will be available at `localhost:9000`

## Custom html
By default Webpack will create its own html file. But if you want to customize it, you can add path to html template in `webpack.config.js`
```
plugins: [
  new HtmlWebpackPlugin({
    // template: "src/index.html",
  }),
],
```
# 🤷‍♂️ How to use oop5

### Example of _index.ts_ file

```typescript
import { OOP5 } from "oop5-js";
import { Component } from "./components/MyComponent";

class App extends OOP5 {
  setup() {
    //setup canvas size and bg
    this.app.createCanvas(400, 400);
    this.app.background(0);

    this.components.set([
      new Component
    ]);
  }

  draw() {
    this.app.background(0);
    
    //call draw for each component in list
    this.components.list.forEach(component => {
      component.draw();
    });

    //or more compact way
    this.components.draw();
  }
}

// Don't forget to call an instance of App somewhere
new App();
```

### Example of _MyComponent.ts_ file

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

> _Any p5.js method or enum available via `this.app` in classes that extends OOP5 or P5Component_

# 🧱 Component handler
App components should be stored inside `App` field `this.components`. It's not a regullar array but `ComponentList` class.
> Make sure, to modify list of components only via this class methods as it handles proper destroying of gone components. Such as removing events listeners etc.

## `ComponentList` fields and methods
| Fields| Return type                                          | Description                   |
| ----- | ---------------------------------------------------  | ----------------------------- |
| list  | _Array_                                              | _native array of components_  |

| Methods | Arguments                                                | Description                   |
| -----   | ---------------------------------------------------      | ----------------------------- |
| set     | (component: P5Component \\| P5Component[]) => number     | _set single or multiple components as current list_  |
|         | ((list: P5Component[]) => P5Component[])) => number      | _callback will receive current component list and returning value will be set as current list_  |
| add     | (component: P5Component \\| P5Component[]) => number     | _add single or multiple components to the list_  |

# 📩 Event handling
Event handlers are available in `App` and in `Component` classes as metods.\
This way you can simply implement handler inside class and `oop5` will manage it.

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
# 🚜 Example usage: 
```typescript
class App extends OOP5 {

  //...setup code
  
  keyPressed(event?: KeyboardEvent): void {
    console.log('catch in app', event);
  }
}

class Component extends P5Component {
  
  //...setup code
  
  keyPressed(event?: KeyboardEvent): void {
    console.log('catch in component', event);
  }
}
```
## ⚠️ Currently all of the events are handled simultaneously with no option to stop propagation. This feature will be added later.

> So in the _example above_ `keyPressed` handler will be fired once in `App` class and once (once for each instance of component) in `Component` class.

## ⚠️ For any _not yet supported_ events supported by `p5` you can set them directly like this:
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

# 🤖 This package is in active development. Feel free to submit bugs and features:

on github https://github.com/muzmich/OOP5/issues

on mail muzmich@icloud.com


