import {html} from '../node_modules/lit-html/lit-html.js';
import renderFunction from './moduls/renderFunction.js';

const filmTemplate = (data) => html`
<a href=${data.photo} data-toggle="lightbox" data-gallery="example-gallery" class="col-xl-6 col-md-4 box-1">
                            <img src=${data.photo} class="img-fluid">
                                <p class="photoName">${data.title}</p>
                          </a>`;

renderFunction('.row', '../data/photos.json', filmTemplate);