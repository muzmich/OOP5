import { keyEventMap, KeyHandlerService } from '../services/keyHandler.service';
import { mouseEventMap, MouseHandlerService } from '../services/mouseHandler.service';

export function bindThisToMouseHandlers(uuid?: string): void {
  mouseEventMap.forEach(event => {
    if (this[event] && typeof this[event] === 'function' && this[event].toString() !== 'function (event, next) { }') {
      MouseHandlerService.getInstance().addHandler(event, this[event].bind(this), uuid)
    }
  });
}

export function bindThisToKeyboardHandlers(uuid?: string): void {
  keyEventMap.forEach(event => {
    if (this[event] && typeof this[event] === 'function' && this[event].toString() !== 'function (event, next) { }') {
      KeyHandlerService.getInstance().addHandler(event, this[event].bind(this), uuid)
    }
  });
}