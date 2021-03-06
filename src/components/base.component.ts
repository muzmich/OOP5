import p5 from "p5";
import { OOP5 } from "../core/app";
import { InteractionHandler } from '../services/interactionHandler';
import { v4 as uuidv4 } from 'uuid';
import { bindThisToMouseHandlers, bindThisToKeyboardHandlers } from '../utils/serviceBinding';

export abstract class P5Component extends InteractionHandler {
  abstract draw(): void;

  public readonly uuid: string;

  protected readonly app: p5 = OOP5.p5;

  constructor() {
    super();
    this.uuid = uuidv4();
    this.servicesBinding();
  }

  public destory() {
    this.unbindServices();
  }

  private servicesBinding() {
    bindThisToMouseHandlers.bind(this)();
    bindThisToKeyboardHandlers.bind(this)();
  }

  private unbindServices() {
    this.unbindThisFromKeyboardHandlers(this.uuid);
    this.unbindThisFromMouseHandlers(this.uuid);
  }
}
