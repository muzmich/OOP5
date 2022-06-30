import p5 from "p5";
import { InteractionHandler } from '../services/interactionHandler';
import { KeyHandlerService } from "../services/keyHandler.service";
import { MouseHandlerService } from '../services/mouseHandler.service';
import { ComponentList } from './componentList';

export abstract class OOP5 extends InteractionHandler {
  /**
   * instance of p5
   */
  public static p5: p5;

  /**
   * instance of p5
   */
  public app: p5;

  /**
   * list of app components
   */
  public readonly components = new ComponentList();

  constructor(
    private keyService = KeyHandlerService.getInstance(),
    private mouseService = MouseHandlerService.getInstance(),
  ) {
    super();
    this.initP5();
    this.initServices();
    this.servicesBinding();
  }

  private initP5() {
    this.app = new p5((p5: p5) => {
      p5.preload = this.preload.bind(this);
      p5.setup = this.setup.bind(this);
      p5.draw = this.draw.bind(this);
    });

    OOP5.p5 = this.app;
  }

  private initServices() {
    this.keyService.init(this.app);
    this.mouseService.init(this.app);
  }

  private servicesBinding() {
    this.bindThisToHandlers();
  }


  /**
   * This is p5 preload function. Called before app start.
   */
  preload(): void { };

  /**
   * This is p5 setup function. Called after app start. Use it to create canvas, setup size etc.
   */
  abstract setup(): void;

  /**
   * This is p5 draw function. Called for every frame
   */
  abstract draw(): void;
}
