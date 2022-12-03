import {render} from '../node_modules/lit-html/lit-html.js';
import {footerTemplate, headerTemplate} from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';
import clock from './moduls/clock.js';

toggleMenu();
// let dayIndex = new Date().getDay();

// const eDays = document.querySelectorAll('th');
// const eBelows = document.querySelectorAll('tr td');

// if (eDays[dayIndex-1]) {
//     eDays[dayIndex-1].style.color = 'blue';
// }
// eBelows[dayIndex-1].innerText=(new Date()).toLocaleDateString('en-GB');

render(headerTemplate('RECORDS board'), document.querySelector('header'));
render(footerTemplate, document.body);

document.querySelector('.date').innerText=(new Date()).toLocaleDateString('en-GB');
document.querySelector('.time').innerText=clock();