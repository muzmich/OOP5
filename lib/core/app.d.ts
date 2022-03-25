import p5 from "p5";
import { BaseComponent } from "../components/base.component";
export declare abstract class OOP5 {
    /**
     * instance of p5
     */
    app: p5;
    /**
     * list of app components
     */
    protected components: BaseComponent[];
    constructor();
    private initP5;
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
