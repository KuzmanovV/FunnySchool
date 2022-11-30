import {html, render} from '../node_modules/lit-html/lit-html.js';
import {renderMultimedia, footerTemplate, headerTemplate} from './moduls/renderFunctions.js';
import toggleMenu from './moduls/headerAnim.js';

toggleMenu();

const comicsTemplate = (book) => html`
<a href=${book.play} data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${book.book} class="img-fluid">
                                <p class="photoName">${book.title}</p>
                          </a>`;

render(headerTemplate('COMICS'), document.querySelector('header'));
renderMultimedia('.row', '../data/comicsBooks.json', comicsTemplate);
render(footerTemplate, document.body);

