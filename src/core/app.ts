import p5 from "p5";
import { BaseComponent } from "../components/base.component";
import { Greeting } from "../components/greeting.component";
import { KeyboardService } from "../services/keyboard.service";

export abstract class OOP5 extends KeyboardService {
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
  public components!: BaseComponent[];

  constructor() {
    super();
    this.initP5();
    this.init();
  }

  private initP5() {
    const settings = (p5: p5) => {
      OOP5.p5 = p5;
      this.app = p5;
      p5.setup = () => this.setup();
      p5.draw = () => this.draw();

      this.components = [new Greeting()];
      this.initKeyboardService(p5, this);
    };
    new p5(settings);
  }

  /**
   * This is init function. Called on app start.
   */
  protected abstract init(): void;

  /**
   * This is p5 setup function. Called after app start. Use it to create canvas, setup size etc.
   */
  protected abstract setup(): void;

  /**
   * This is p5 draw function. Called for every frame
   */
  protected abstract draw(): void;
}
