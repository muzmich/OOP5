import p5 from "p5";
import { OOP5 } from "../core/app";
import { reduceHandlers } from '../utils/reduceHandlers';

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

  public addHandler(event: mouseEvent, handler: Function, uuid?: string) {
    this.handlers[event].push({ uuid, handler })

    this.updateBindings(event);
  }

  public removeHandler(event: mouseEvent, id?: string) {
    this.handlers[event] = [...this.handlers[event].filter(({ uuid }) => {
      return id !== uuid
    })];

    this.updateBindings(event);
  }

  private handlers: Record<mouseEvent, { uuid: string | undefined, handler: Function }[]> = {
    mouseMoved: [],
    mouseDragged: [],
    mousePressed: [],
    mouseReleased: [],
    mouseClicked: [],
    doubleClicked: [],
    mouseWheel: [],
  };

  private bindedHandlers: Record<mouseEvent, Function | undefined> = {
    mouseMoved: undefined,
    mouseDragged: undefined,
    mousePressed: undefined,
    mouseReleased: undefined,
    mouseClicked: undefined,
    doubleClicked: undefined,
    mouseWheel: undefined,
  };

  private updateBindings(event: mouseEvent) {
    this.bindedHandlers[event] = reduceHandlers(this.handlers[event].map(e => e.handler));
  }

  private mouseMovedHandler(event?: MouseEvent): void {
    this.bindedHandlers.mouseMoved?.(event)
  }
  private mouseDraggedHandler(event?: MouseEvent): void {
    this.bindedHandlers.mouseDragged?.(event)
  }
  private mousePressedHandler(event?: MouseEvent): void {
    this.bindedHandlers.mousePressed?.(event)
  }
  private mouseReleasedHandler(event?: MouseEvent): void {
    this.bindedHandlers.mouseReleased?.(event)
  }
  private mouseClickedHandler(event?: MouseEvent): void {
    this.bindedHandlers.mouseClicked?.(event)
  }
  private doubleClickedHandler(event?: MouseEvent): void {
    this.bindedHandlers.doubleClicked?.(event)
  }
  private mouseWheelHandler(event?: MouseEvent): void {
    this.bindedHandlers.mouseWheel?.(event)
  }
}