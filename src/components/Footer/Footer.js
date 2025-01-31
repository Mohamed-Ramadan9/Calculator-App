
export class Footer{
    constructor(text) {
      this.element = document.createElement('footer');
      this.element.textContent = text;
      this.element.classList.add('calculator-footer');
    }
  
    render() {
      return this.element;
    }
  }