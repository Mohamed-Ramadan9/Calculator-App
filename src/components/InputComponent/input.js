
export class InputComponent {
    constructor() {
      this.element = document.createElement('input');
      this.element.type = 'text';
      this.element.readOnly = true;
      this.element.classList.add('calculator-input');
    }
  
    update(value) {
      this.element.value = value;
    }
  
    render() {
      return this.element;
    }
  }