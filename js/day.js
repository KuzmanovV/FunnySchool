import {render} from '../node_modules/lit-html/lit-html.js';
import {footerTemplate} from './moduls/renderFunctions.js';

let dayIndex = new Date().getDay();

const eDays = document.querySelectorAll('th');
const eBelows = document.querySelectorAll('tr td');

eDays[dayIndex-1].style.color = 'blue';
eBelows[dayIndex-1].innerText=(new Date()).toLocaleDateString('en-GB');

render(footerTemplate, document.body);