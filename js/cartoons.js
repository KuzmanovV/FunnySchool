import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate} from './moduls/renderFunctions.js';

const filmTemplate = (data) => html`
<div class="film">
        <a href=${data.uLink}>${data.title}
        <img class="snap" src=${data.filmImg} alt="a snapshot from the movie" />
        </a>
      </div>`;

renderMultimedia('.films', '../data/films.json', filmTemplate);
render(footerTemplate, document.body);
