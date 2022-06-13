import p5 from "p5";
import { OOP5 } from "../core/app";

export enum keyEvent {
  keyPressed = 'keyPressed',
  keyIsDown = 'keyIsDown',
  keyReleased = 'keyReleased',
  keyTyped = 'keyTyped',
}

export const keyEventMap: keyEvent[] = [
  keyEvent.keyPressed as const,
  keyEvent.keyIsDown as const,
  keyEvent.keyTyped as const,
  keyEvent.keyReleased as const,
]

export interface KeyboardListeners {
  keyPressed?(event?: KeyboardEvent): void;
  keyReleased?(event?: KeyboardEvent): void;
  keyIsDown?(event?: KeyboardEvent): void;
  keyTyped?(event?: KeyboardEvent): void;
}

export class KeyHandlerService {
  private static instance: KeyHandlerService;

  public static getInstance(): KeyHandlerService {
    if (!KeyHandlerService.instance) {
      KeyHandlerService.instance = new KeyHandlerService();
    }

    return KeyHandlerService.instance;
  }

  public init(p5: p5) {
    p5.keyTyped = this.keyTypedHandler.bind(this);
    p5.keyIsDown = this.keyIsDownHandler.bind(this);
    p5.keyPressed = this.keyPressedHandler.bind(this);
    p5.keyReleased = this.keyReleasedHandler.bind(this);
  }

  public addHandler(event: keyEvent, handler: Function) {
    this.handlers[event].push(handler)
  }

  private handlers: Record<keyEvent, Function[]> = {
    keyPressed: [],
    keyIsDown: [],
    keyReleased: [],
    keyTyped: [],
  };

  private keyPressedHandler(event?: KeyboardEvent): void {
    this.handlers.keyPressed.forEach(handler => {
      handler(event);
    });
  }

  private keyIsDownHandler(event?: KeyboardEvent): void {
    this.handlers.keyIsDown.forEach(handler => {
      handler(event);
    });
  }

  private keyReleasedHandler(event?: KeyboardEvent): void {
    this.handlers.keyReleased.forEach(handler => {
      handler(event);
    });
  }

  private keyTypedHandler(event?: KeyboardEvent): void {
    this.handlers.keyReleased.forEach(handler => {
      handler(event);
    });
  }
}