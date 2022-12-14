import {render} from '../node_modules/lit-html/lit-html.js';
import {footerTemplate, headerTemplate} from './modules/renderFunctions.js';
import toggleMenu from './modules/headerAnim.js';

toggleMenu();
let dayIndex = new Date().getDay();

const eDays = document.querySelectorAll('th');
const eBelows = document.querySelectorAll('tr td');

if (eDays[dayIndex-1]) {
    eDays[dayIndex-1].style.color = 'blue';
}
eBelows[dayIndex-1].innerText=(new Date()).toLocaleDateString('en-GB');

render(headerTemplate('DAY - 1st grade, 2022'), document.querySelector('header'));
render(footerTemplate, document.body);