
export class ButtonComponent {
    constructor(label, onClick) {
      this.element = document.createElement('button');
      this.element.textContent = label;
      this.element.classList.add('calculator-btn');
      this.element.addEventListener('click', onClick);
    }
  
    render() {
      return this.element;
    }
  }