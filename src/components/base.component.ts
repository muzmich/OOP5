import p5 from "p5";

export abstract class BaseComponent {
  protected app: p5;
  constructor(p5: p5) {
    this.app = p5;
  }
  abstract draw(): void;
}
