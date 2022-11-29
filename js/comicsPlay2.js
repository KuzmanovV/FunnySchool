import {html, render} from 'lit-html';
import {renderMultimedia, footerTemplate} from './moduls/renderFunctions.js';

const comicsPlayTemplate = (data) => html`
<a href=${data.photo} data-toggle="lightbox" data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${data.photo} class="img-fluid">
                                <p class="photoName">${data.title}</p>
                          </a>`;

renderMultimedia('.row', '../data/comicsBooks.json', comicsPlayTemplate);
render(footerTemplate, document.body);

