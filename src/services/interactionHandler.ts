import { KeyboardListeners, keyEventMap, KeyHandlerService } from './keyHandler.service';

export abstract class InteractionHandler implements KeyboardListeners {
  keyPressed?(event?: KeyboardEvent): void;
  keyReleased?(event?: KeyboardEvent): void;
  keyIsDown?(event?: KeyboardEvent): void;
  keyTyped?(event?: KeyboardEvent): void;

  protected bindThisToKeyboardHandlers(): void {
    keyEventMap.forEach(event => {
      if (this[event] && typeof this[event] === 'function') {
        KeyHandlerService.getInstance().addHandler(event, this[event])
      }
    });
  }
}