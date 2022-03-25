import p5 from "p5";
import { BaseComponent } from "../components/base.component";
import { Greeting } from "../components/greeting.component";

export abstract class OOP5 {
  /**
   * instance of p5
   */
  public app!: p5;

  /**
   * list of app components
   */
  protected components!: BaseComponent[];

  constructor() {
    this.initP5();
    this.init();
  }

  private initP5(userSettings?: (p5: p5) => void) {
    const settings = (p5: p5) => {
      this.app = p5;
      p5.setup = () => this.setup();
      p5.draw = () => this.draw();
    };
    new p5(userSettings || settings);

    this.components = [new Greeting(this.app)];
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
