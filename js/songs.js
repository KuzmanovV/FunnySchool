import {html} from '../node_modules/lit-html/lit-html.js';
import { render } from '../../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate} from './moduls/renderFunctions.js';

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

render(footerTemplate, document.body);
renderMultimedia('.songs', '../data/songs.json', songTemplate);

