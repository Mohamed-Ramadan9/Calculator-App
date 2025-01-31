export class Calculator {
  constructor() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
  }

  addNumber(num) {
    if (this.currentValue === "0") {
      this.currentValue = num;
    } else {
      this.currentValue += num;
    }
  }

  setOperation(operation) {
    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = "0";
  }

  compute() {
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        this.currentValue = (prev + current).toString();
        break;
      case "-":
        this.currentValue = (prev - current).toString();
        break;
      case "*":
        this.currentValue = (prev * current).toString();
        break;
      case "/":
        this.currentValue = (prev / current).toString();
        break;
    }

    this.operation = null;
    this.previousValue = null;
  }

  clear() {
    this.currentValue = "0";
    this.previousValue = null;
    this.operation = null;
  }
}
