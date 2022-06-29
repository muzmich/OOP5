import p5 from "p5";
import { OOP5 } from "../core/app";
import { InteractionHandler } from '../services/interactionHandler';
import { v4 as uuidv4 } from 'uuid';

export abstract class P5Component extends InteractionHandler {
  public readonly uuid: string;

  protected readonly app: p5 = OOP5.p5;

  constructor() {
    super();
    this.servicesBinding();
    this.uuid = uuidv4();
  }

  private servicesBinding() {
    this.bindThisToKeyboardHandlers();
  }

  abstract draw(): void;
}
