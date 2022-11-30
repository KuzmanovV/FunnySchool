import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate, headerTemplate} from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';

toggleMenu();

const comicsPlayTemplate = (data) => html`
<a href=${data.page} data-toggle="lightbox" data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${data.page} class="img-fluid">
                          </a>`;

render(headerTemplate('DAGA - 1'), document.querySelector('header'));
renderMultimedia('.row', '../data/comicsPlay1.json', comicsPlayTemplate);
render(footerTemplate, document.body);

