import {html} from '../node_modules/lit-html/lit-html.js';
import renderFunction from './moduls/renderFunction.js';

const filmTemplate = (data) => html`
<div class="film">
        <a href=${data.uLink}>${data.title}</a>
        <img class="snap" src=${data.filmImg} alt="a snapshot from the movie" />
      </div>`;

renderFunction('.films', '../data/films.json', filmTemplate);

