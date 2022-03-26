import p5 from "p5";
import { OOP5 } from "../core/app";
import { KeyboardService } from "../services/keyboard.service";

export abstract class BaseComponent extends KeyboardService {
  protected app: p5 = OOP5.p5;

  abstract draw(): void;

  public init(): void {}
}
