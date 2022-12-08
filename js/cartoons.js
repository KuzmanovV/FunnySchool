import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate, headerTemplate} from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';

toggleMenu();

const cartoonTemplate = (data) => html`
<div class="film">
        <a href=${data.uLink}>${data.title}
        <img class="snap" src=${data.filmImg} alt="a snapshot from the movie" />
        </a>
      </div>`;

render(headerTemplate('CARTOONS'), document.querySelector('header'));
renderMultimedia('.cartoons', '../data/cartoons.json', cartoonTemplate);
render(footerTemplate, document.body);
