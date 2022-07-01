import { keyEventMap, KeyHandlerService } from './keyHandler.service';
import { mouseEventMap, MouseHandlerService } from './mouseHandler.service';

export abstract class InteractionHandler {
  // Keyboard events
  protected keyPressed(event: KeyboardEvent, next: Function): void { };
  protected keyIsDown(event: KeyboardEvent, next: Function): void { };
  protected keyReleased(event: KeyboardEvent, next: Function): void { };
  protected keyTyped(event: KeyboardEvent, next: Function): void { };

  // Mouse events
  protected mouseMoved(event: MouseEvent, next: Function): void { };
  protected mouseDragged(event: MouseEvent, next: Function): void { };
  protected mousePressed(event: MouseEvent, next: Function): void { };
  protected mouseReleased(event: MouseEvent, next: Function): void { };
  protected mouseClicked(event: MouseEvent, next: Function): void { };
  protected doubleClicked(event: MouseEvent, next: Function): void { };
  protected mouseWheel(event: MouseEvent, next: Function): void { };

  protected unbindThisFromKeyboardHandlers(uuid?: string): void {
    keyEventMap.forEach(event => {
      KeyHandlerService.getInstance().removeHandler(event, uuid)
    });
  }

  protected unbindThisFromMouseHandlers(uuid?: string): void {
    mouseEventMap.forEach(event => {
      MouseHandlerService.getInstance().removeHandler(event, uuid)
    });
  }
}

