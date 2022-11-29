import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate} from './moduls/renderFunctions.js';

const comicsPlayTemplate = (data) => html`
<a href=${data.page} data-toggle="lightbox" data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${data.page} class="img-fluid">
                          </a>`;

renderMultimedia('.row', '../data/comicsPlay1.json', comicsPlayTemplate);
render(footerTemplate, document.body);

