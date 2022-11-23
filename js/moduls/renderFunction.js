import {render} from '../../node_modules/lit-html/lit-html.js';

export default async function renderFunction (placeClass, dataWay, mediaTemplate){
        const place = document.querySelector(placeClass);
        const data = await(await fetch(dataWay)).json();
        const result = data.map(mediaTemplate);
        render(result, place);
    };