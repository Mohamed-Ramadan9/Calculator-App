
export class Nav{
    constructor(title) {
      this.element = document.createElement('nav');
      this.element.innerHTML = `<h1>${title}</h1>`;
      this.element.classList.add('calculator-nav');
    }
  
    render() {
      return this.element;
    }
  }