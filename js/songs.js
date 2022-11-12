import {html} from 'https://unpkg.com/lit-html?module';
import renderFunction from './moduls/renderFunction.js';

const songTemplate = (data) => html`
<div class="song">
        <label>${data.title}</label>
        <audio controls>
          <source
            src=${data.song}
            type=${data.type}
          />
        </audio>
      </div>`;

const placeClass = '.songs';
const dataWay = '../data/songs.json';

renderFunction(placeClass, dataWay, songTemplate);