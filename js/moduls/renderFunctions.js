import { render, html } from '../../node_modules/lit-html/lit-html.js';

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

const headerTemplate = (multimediaTitle) => html`
      <div>
        <img class="maxImg" src="../static/img/Max.jpg" alt="MaxsImg" />
        <div class="explanationText">
          <h1>Max's ${multimediaTitle}</h1>
          <button class="headerHide">hide menu</button>
        </div>
        <img class="maxImg" src="../static/img/Max.jpg" alt="MaxsImg" />
      </div>
      <nav>
        <ul>
          <li><a href="../index.html">Photos</a></li>
          <li><a href="../index.html">Songs</a></li>
          <li><a class="activePage" href="../index.html">Maths</a></li>
          <li><a href="../index.html">Cartoons</a></li>
          <li><a href="../index.html">Comics</a></li>
        </ul>
      </nav>`

export { renderMultimedia, footerTemplate, headerTemplate };
