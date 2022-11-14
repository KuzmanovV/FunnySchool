import {render} from '../../node_modules/lit-html/lit-html.js';

export default async function renderFunction (placeClass, dataWay, songTemplate){
        const place = document.querySelector(placeClass);
        const data = await(await fetch(dataWay)).json();
        const result = data.map(songTemplate);
        render(result, place);
    };