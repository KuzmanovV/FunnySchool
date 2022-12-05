import {render, html} from '../node_modules/lit-html/lit-html.js';
import {footerTemplate, headerTemplate} from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';
import clock from './moduls/clock.js';
import { el } from './moduls/utils.js';

toggleMenu();

render(headerTemplate('RECORDS board'), document.querySelector('header'));
document.querySelector('.date').innerText=(new Date()).toLocaleDateString('en-GB');
document.querySelector('.time').innerText=clock();
let recordCountN = 0
const recordRow = (date, time, record) => html`
        <td>${recordCountN}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${record}</td>
`;

let recordsArr = JSON.parse(localStorage.recordsArr); 
console.log(recordsArr);
recordsArr.forEach(record => {
    recordCountN++;
    const trElement = el('tr', {
        className: `tr${recordCountN}`,
      })
    document.querySelector('.table').appendChild(trElement);
    render(recordRow(record.date, record.time, record.record), document.querySelector(`.tr${recordCountN}`));
});

render(footerTemplate, document.body);