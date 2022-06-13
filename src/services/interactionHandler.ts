import { KeyboardListeners, keyEventMap, KeyHandlerService } from './keyHandler.service';
import { mouseEventMap, MouseHandlerService, MouseListeners } from './mouseHandler.service';

export abstract class InteractionHandler implements KeyboardListeners, MouseListeners {
  // Keyboard events
  keyPressed?(event?: KeyboardEvent): void;
  keyReleased?(event?: KeyboardEvent): void;
  keyIsDown?(event?: KeyboardEvent): void;
  keyTyped?(event?: KeyboardEvent): void;

  // Mouse events

  mouseMoved?(event: object): void;
  mouseDragged?(event: object): void;
  mousePressed?(event: object): void;
  mouseReleased?(event: object): void;
  mouseClicked?(event: object): void;
  doubleClicked?(event: object): void;
  mouseWheel?(event: object): void;

  protected bindThisToHandlers() {
    this.bindThisToMouseHandlers();
    this.bindThisToKeyboardHandlers();
  }

  protected bindThisToKeyboardHandlers(): void {
    keyEventMap.forEach(event => {
      if (this[event] && typeof this[event] === 'function') {
        KeyHandlerService.getInstance().addHandler(event, this[event])
      }
    });
  }

  protected bindThisToMouseHandlers(): void {
    mouseEventMap.forEach(event => {
      if (this[event] && typeof this[event] === 'function') {
        MouseHandlerService.getInstance().addHandler(event, this[event])
      }
    });
  }
}