import { Calculator } from "../calculator.js";
import { ButtonComponent } from "../components/Button/Button.js";
import { Form } from "../components/Form/Form.js";
import { InputComponent } from "../components/InputComponent/input.js";

export class CalculatorUI {
    constructor(containerId) {
      this.calculator = new Calculator();
      this.container = document.getElementById(containerId);
      this.form = new Form();
      this.input = new InputComponent();
      
      this.initialize();
    }
  
    initialize() {
   
      this.form.addChild(this.input);
      
      const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C']
      ];
  
      buttons.forEach(row => {
        row.forEach(label => {
          const button = new ButtonComponent(label, () => this.handleInput(label));
          this.form.addChild(button);
        });
      });
  
      this.container.appendChild(this.form.render());
      this.updateDisplay();
    }
  
    handleInput(value) {
      if (value >= '0' && value <= '9' || value === '.') {
        this.calculator.addNumber(value);
      } else if (value === 'C') {
        this.calculator.clear();
      } else if (value === '=') {
        this.calculator.compute();
      } else {
        this.calculator.setOperation(value);
      }
      
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.input.update(this.calculator.currentValue);
    }
  }