import p5 from "p5";
import { OOP5 } from "../core/app";

export class KeyboardService {
  protected initKeyboardService(p5: p5, app: OOP5) {
    p5.keyPressed = (e: KeyboardEvent) => {
      app.components.forEach((comp) => {
        comp.keyPressed(e);
      });
      this.keyPressed(e);
    };
    p5.keyReleased = (e: KeyboardEvent) => {
      app.components.forEach((comp) => {
        comp.keyReleased(e);
      });
      this.keyReleased(e);
    };
    p5.keyTyped = (e: KeyboardEvent) => {
      app.components.forEach((comp) => {
        comp.keyTyped(e);
      });
      this.keyTyped(e);
    };
  }

  public keyPressed(event?: KeyboardEvent): void {}

  public keyReleased(event?: KeyboardEvent): void {}

  public keyTyped(event?: KeyboardEvent): void {}
}
