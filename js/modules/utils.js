function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function sound(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
    audio.volume = 0.03;
  }
  
  function el(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item == 'string' || typeof item == 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }

export{
    getRandomInt,
    el,
    sound,
}