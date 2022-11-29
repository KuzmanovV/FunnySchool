import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate} from './moduls/renderFunctions.js';

const comicsTemplate = (book) => html`
<a href=${book.play} data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${book.book} class="img-fluid">
                                <p class="photoName">${book.title}</p>
                          </a>`;

renderMultimedia('.row', '../data/comicsBooks.json', comicsTemplate);
render(footerTemplate, document.body);

