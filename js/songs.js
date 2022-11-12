import {html, render} from 'https://unpkg.com/lit-html?module';

const songTemplate = (data) => html`
<div class="song">
        <label>${data.title}</label>
        <audio controls>
          <source
            src=${data.song}
            type=${data.type}
          />
        </audio>
      </div>`;

const placeClass = '.songs';
const dataWay = '../data/songs.json';
async function renderFunction (placeClass, dataWay){
    const place = document.querySelector(placeClass);
    const data = await(await fetch(dataWay)).json();
    const result = data.map(songTemplate);
    render(result, place);
};

renderFunction(placeClass, dataWay);
