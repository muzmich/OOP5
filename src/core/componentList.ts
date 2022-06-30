import { P5Component } from '../components/base.component';

export class ComponentList {

  private componentList: P5Component[] = [];

  /**
   * Returns __readonly__ array of components
   */
  public get list() {
    return this.componentList;
  }
  /**
   * This method allows you to set list of components
   * @param {(list: P5Component[]) => P5Component[]} callback - callback receives current list. Returning result
   * will be set as new component list.
   */
  set(callback: (list: P5Component[]) => P5Component[]): void;
  /**
   * This method allows you to set list of components
   * @param {P5Component | P5Component[]} component - single or array of instances of P5Component components
   * will be set as new component list
   */
  set(component: P5Component | P5Component[]): void;
  set(callbackOrComponent: P5Component | P5Component[] | ((list: P5Component[]) => P5Component[])) {
    if (typeof callbackOrComponent === 'function') {
      return this.set(callbackOrComponent(this.componentList));
    }

    //call destory on every component in list
    this.componentList.forEach(comp => {
      comp.destory();
    })

    if (Array.isArray(callbackOrComponent)) {
      this.componentList = callbackOrComponent;
    } else {
      this.componentList = [callbackOrComponent];
    }

    return this.componentList;
  }

  /**
   * This method allows you to add new component to list
   * @param {P5Component | P5Component[]} component - single or array of instances of P5Component components
   * will be added to component list
   * @return {number} Length of updated array
   */
  add(component: P5Component | P5Component[]) {
    if (Array.isArray(component)) {
      return this.componentList.push(...component);
    }
    return this.componentList.push(component);
  }

  /**
   * Call draw method for every component in componentlist array. Same as 
   * this.components.list.forEach(c => c.draw())
   */
  draw() {
    this.list.forEach(c => {
      c.draw();
    })
  }
}