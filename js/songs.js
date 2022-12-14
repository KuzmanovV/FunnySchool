import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate, headerTemplate} from './modules/renderFunctions.js';
import toggleMenu from './modules/headerAnim.js';

toggleMenu();

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

render(headerTemplate('SONGS'), document.querySelector('header'));
renderMultimedia('.songs', '../data/songs.json', songTemplate);
render(footerTemplate, document.body);

