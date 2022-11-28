import { render } from '../../node_modules/lit-html/lit-html.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

async function renderMultimedia(placeClass, dataWay, mediaTemplate) {
  const place = document.querySelector(placeClass);
  const data = await (await fetch(dataWay)).json();
  const result = data.map(mediaTemplate);
  render(result, place);
}

const footerTemplate = html`<footer>
<p>
  &copy; All rights reserved
  <a class="developed" href="https://github.com/KuzmanovV">
    Developed by V. Kuzmanov
  </a>
</p>
</footer>`;

export { renderMultimedia, footerTemplate };
