import p5 from "p5";
import { OOP5 } from "../core/app";

export enum mouseEvent {
  mouseMoved = 'mouseMoved',
  mouseDragged = 'mouseDragged',
  mousePressed = 'mousePressed',
  mouseReleased = 'mouseReleased',
  mouseClicked = 'mouseClicked',
  doubleClicked = 'doubleClicked',
  mouseWheel = 'mouseWheel',
}

export const mouseEventMap: mouseEvent[] = [
  mouseEvent.mouseMoved,
  mouseEvent.mouseDragged,
  mouseEvent.mousePressed,
  mouseEvent.mouseReleased,
  mouseEvent.mouseClicked,
  mouseEvent.doubleClicked,
  mouseEvent.mouseWheel,
]
export class MouseHandlerService {
  private static instance: MouseHandlerService;

  public static getInstance(): MouseHandlerService {
    if (!MouseHandlerService.instance) {
      MouseHandlerService.instance = new MouseHandlerService();
    }

    return MouseHandlerService.instance;
  }

  public init(p5: p5) {
    p5.mouseMoved = this.mouseMovedHandler.bind(this);
    p5.mouseDragged = this.mouseDraggedHandler.bind(this);
    p5.mousePressed = this.mousePressedHandler.bind(this);
    p5.mouseReleased = this.mouseReleasedHandler.bind(this);
    p5.mouseClicked = this.mouseClickedHandler.bind(this);
    p5.doubleClicked = this.doubleClickedHandler.bind(this);
    p5.mouseWheel = this.mouseWheelHandler.bind(this);
  }

  public addHandler(event: mouseEvent, handler: Function) {
    this.handlers[event].push(handler)
  }

  private handlers: Record<mouseEvent, Function[]> = {
    [mouseEvent.mouseMoved]: [],
    [mouseEvent.mouseDragged]: [],
    [mouseEvent.mousePressed]: [],
    [mouseEvent.mouseReleased]: [],
    [mouseEvent.mouseClicked]: [],
    [mouseEvent.doubleClicked]: [],
    [mouseEvent.mouseWheel]: [],
  };

  private mouseMovedHandler(event?: object): void {
    this.handlers.mouseMoved.forEach(handler => {
      handler(event);
    })

  }
  private mouseDraggedHandler(event?: object): void {
    this.handlers.mouseDragged.forEach(handler => {
      handler(event);
    })

  }
  private mousePressedHandler(event?: object): void {
    this.handlers.mousePressed.forEach(handler => {
      handler(event);
    })

  }
  private mouseReleasedHandler(event?: object): void {
    this.handlers.mouseReleased.forEach(handler => {
      handler(event);
    })

  }
  private mouseClickedHandler(event?: object): void {
    this.handlers.mouseClicked.forEach(handler => {
      handler(event);
    })

  }
  private doubleClickedHandler(event?: object): void {
    this.handlers.doubleClicked.forEach(handler => {
      handler(event);
    })

  }
  private mouseWheelHandler(event?: object): void {
    this.handlers.mouseWheel.forEach(handler => {
      handler(event);
    })

  }
}