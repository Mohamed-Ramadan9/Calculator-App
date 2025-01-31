
export class Form {
    constructor() {
      this.element = document.createElement('div');
      this.element.classList.add('calculator-form');
    }
  
    addChild(child) {
      this.element.appendChild(child.render());
    }
  
    render() {
      return this.element;
    }
  }