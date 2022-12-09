import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate, headerTemplate} from './modules/renderFunctions.js';
import toggleMenu from './modules/headerAnim.js';

toggleMenu();

const photoTemplate = (data) => html`
<a href=${data.photo} data-toggle="lightbox" data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${data.photo} class="img-fluid">
                                <p class="photoName">${data.title}</p>
                          </a>`;

render(headerTemplate('PHOTOS'), document.querySelector('header'));
renderMultimedia('.row', '../data/photos.json', photoTemplate);
render(footerTemplate, document.body);

