import { render, html } from '../node_modules/lit-html/lit-html.js';
import { footerTemplate, headerTemplate } from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';
import { clock } from './moduls/clock.js';
import { el } from './moduls/utils.js';

toggleMenu();

render(headerTemplate('RECORDS board'), document.querySelector('header'));
document.querySelector('.date').innerText = new Date().toLocaleDateString('en-GB');
(function waitForElement() {
  if (typeof clock() !== 'undefined') {
    document.querySelector('.time').innerText = clock();
  } else {
    setTimeout(waitForElement, 100);
  }
})();

document.querySelector('.forConfirmationNormal').addEventListener('click', confirmDelNormal);
document.querySelector('.delMixed').addEventListener('click', delRecordsMixed);
document.querySelector('.delTripple').addEventListener('click', delRecordsTriple);
function confirmDelNormal() {
  document.querySelector('.forConfirmationNormal').setAttribute('disabled', '');
  document.querySelector('.confirmation').style.setProperty('display', 'block');
}
document.querySelector('.delNormal').addEventListener('click', delRecordsNormal);
function delRecordsNormal() {
  localStorage.setItem('recordsArrNormal', JSON.stringify([]));
  location.reload();
}
function delRecordsMixed() {
  localStorage.setItem('recordsArrMixed', JSON.stringify([]));
  location.reload();
}
function delRecordsTriple() {
  localStorage.setItem('recordsArrTriple', JSON.stringify([]));
  location.reload();
}

{
let recordsArrTriple = JSON.parse(localStorage.recordsArrTriple);
let lastRecordObject = recordsArrTriple[recordsArrTriple.length - 1];
if (lastRecordObject) {
  lastRecordObject.lastFlag = true;
}

recordsArrTriple.sort((a, b) => a.record - b.record);

let recordCountN = 0;
recordsArrTriple.forEach((record) => {
  const recordRowTriple = (date, time, record) => html`
  <td>${recordCountN}</td>
  <td>${date}</td>
  <td>${time}</td>
  <td>${record}</td>
  `;
  
  let lastFlag = '';
  if (record.lastFlag) {
    lastFlag = 'markLast';
  }
  recordCountN++;
  const trElement = el('tr', {
    className: `tr${recordCountN} ${lastFlag}`,
  });
  document.querySelector('.tripleTable').appendChild(trElement);
  render(
    recordRowTriple(record.date, record.time, record.record),
    document.querySelector(`.tr${recordCountN}`)
  );
});
}

{
let recordsArrMixed = JSON.parse(localStorage.recordsArrMixed);
let lastRecordObject = recordsArrMixed[recordsArrMixed.length - 1];
if (lastRecordObject) {
  lastRecordObject.lastFlag = true;
}

recordsArrMixed.sort((a, b) => a.record - b.record);

let recordCountN = 0;
recordsArrMixed.forEach((record) => {
  const recordRowMixed = (date, time, record) => html`
  <td>${recordCountN}</td>
  <td>${date}</td>
  <td>${time}</td>
  <td>${record}</td>
  `;
  
  let lastFlag = '';
  if (record.lastFlag) {
    lastFlag = 'markLast';
  }
  recordCountN++;
  const trElement = el('tr', {
    className: `tr${recordCountN} ${lastFlag}`,
  });
  document.querySelector('.mixedTable').appendChild(trElement);
  render(
    recordRowMixed(record.date, record.time, record.record),
    document.querySelector(`.tr${recordCountN}`)
  );
});
}

{
let recordsArrNormal = JSON.parse(localStorage.recordsArrNormal);
let lastRecordObject = recordsArrNormal[recordsArrNormal.length - 1];
if (lastRecordObject) {
  lastRecordObject.lastFlag = true;
}

recordsArrNormal.sort((a, b) => a.record - b.record);

let recordCountN = 0;
recordsArrNormal.forEach((record) => {
  const recordRowNormal = (date, time, record) => html`
  <td>${recordCountN}</td>
  <td>${date}</td>
  <td>${time}</td>
  <td>${record}</td>
  `;
  
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
    recordRowNormal(record.date, record.time, record.record),
    document.querySelector(`.tr${recordCountN}`)
  );
});
}

render(footerTemplate, document.body);