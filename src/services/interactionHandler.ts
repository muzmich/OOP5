import { keyEventMap, KeyHandlerService } from './keyHandler.service';
import { mouseEventMap, MouseHandlerService } from './mouseHandler.service';

export abstract class InteractionHandler {
  // Keyboard events
  protected keyPressed?(event?: KeyboardEvent): void;
  protected keyReleased?(event?: KeyboardEvent): void;
  protected keyIsDown?(event?: KeyboardEvent): void;
  protected keyTyped?(event?: KeyboardEvent): void;

  // Mouse events

  protected mouseMoved?(event: object): void;
  protected mouseDragged?(event: object): void;
  protected mousePressed?(event: object): void;
  protected mouseReleased?(event: object): void;
  protected mouseClicked?(event: object): void;
  protected doubleClicked?(event: object): void;
  protected mouseWheel?(event: object): void;

  protected bindThisToHandlers() {
    this.bindThisToMouseHandlers();
    this.bindThisToKeyboardHandlers();
  }

  protected bindThisToKeyboardHandlers(): void {
    keyEventMap.forEach(event => {
      if (this[event] && typeof this[event] === 'function') {
        KeyHandlerService.getInstance().addHandler(event, this[event].bind(this))
      }
    });
  }

  protected bindThisToMouseHandlers(): void {
    mouseEventMap.forEach(event => {
      if (this[event] && typeof this[event] === 'function') {
        MouseHandlerService.getInstance().addHandler(event, this[event].bind(this))
      }
    });
  }
}