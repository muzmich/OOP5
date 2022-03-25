import p5 from "p5";
export declare abstract class BaseComponent {
    protected app: p5;
    constructor(p5: p5);
    abstract draw(): void;
}
