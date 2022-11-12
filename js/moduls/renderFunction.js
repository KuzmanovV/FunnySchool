import {render} from 'https://unpkg.com/lit-html?module';

export default async function renderFunction (placeClass, dataWay, songTemplate){
        const place = document.querySelector(placeClass);
        const data = await(await fetch(dataWay)).json();
        const result = data.map(songTemplate);
        render(result, place);
    };