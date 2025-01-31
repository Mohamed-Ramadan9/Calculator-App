import { CalculatorUI } from './CalculatorUI.js';
import { Nav } from '../components/Nav/Nav.js';       
import { Footer } from '../components/Footer/Footer.js'; 


const app = document.getElementById('app');


const nav = new Nav('Calculator App');
app.appendChild(nav.render());


const calculator = new CalculatorUI('app');


const footer = new Footer('© 2023 Calculator Inc.');
app.appendChild(footer.render());