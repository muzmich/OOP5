import { BaseComponent } from "./base.component";

export class Greeting extends BaseComponent {
  draw(): void {
    this.app.background(0);
    this.app.fill("gray");
    this.app.textSize(20);
    this.app.textAlign("center", "center");
    this.app.text("Greetings!\nYou have finished setup.", this.app.height / 2, this.app.width / 2);
  }
}
