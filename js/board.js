import { render, html } from '../node_modules/lit-html/lit-html.js';
import { footerTemplate, headerTemplate } from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';
import { clock } from './moduls/clock.js';
import { el } from './moduls/utils.js';

toggleMenu();

render(headerTemplate('RECORDS board'), document.querySelector('header'));
let dateElement = document.querySelector('.date').innerText;
dateElement = new Date().toLocaleDateString('en-GB');
(function waitForElement() {
  if (typeof clock() !== 'undefined') {
    document.querySelector('.time').innerText = clock();
  } else {
    setTimeout(waitForElement, 100);
  }
})();

document.querySelector('.delete').addEventListener('click', delRecords);
function delRecords() {
  localStorage.clear();
  localStorage.setItem('recordsArr', JSON.stringify([]));
  location.reload();
}

let recordCountN = 0;
const recordRow = (date, time, record) => html`
  <td>${recordCountN}</td>
  <td>${date}</td>
  <td>${time}</td>
  <td>${record}</td>
`;

let recordsArr = JSON.parse(localStorage.recordsArr);
let lastRecordObject = recordsArr[recordsArr.length - 1];
lastRecordObject.lastFlag = true;

recordsArr.sort((a, b) => a.record - b.record);

recordsArr.forEach((record) => {
  let lastFlag = '';
  if (record.lastFlag) {
    lastFlag = 'markLast';
  }
  recordCountN++;
  const trElement = el('tr', {
    className: `tr${recordCountN} ${lastFlag}`,
  });
  document.querySelector('.normalTable').appendChild(trElement);
  render(
    recordRow(record.date, record.time, record.record),
    document.querySelector(`.tr${recordCountN}`)
  );
});

render(footerTemplate, document.body);
