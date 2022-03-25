import p5 from "p5";
import { OOP5 } from "../core/app";

export abstract class BaseComponent {
  protected app: p5;
  constructor() {
    this.app = OOP5.p5;
    this.init();
  }
  abstract draw(): void;

  public init(): void {}
}
