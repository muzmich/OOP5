import p5 from "p5";
import { OOP5 } from "../core/app";
import { InteractionHandler } from '../services/interactionHandler';
import { KeyHandlerService } from '../services/keyHandler.service';


export abstract class P5Component extends InteractionHandler {
  protected app: p5 = OOP5.p5;

  constructor() {
    super();
    this.servicesBinding();
  }

  private servicesBinding() {
    this.bindThisToKeyboardHandlers();
  }

  abstract draw(): void;
}
