// import config
import config from './config.json';

// setting css custom propertie values
let rootStyle = document.body.style;
rootStyle.setProperty('--crop-top', config.crop_top);
rootStyle.setProperty('--crop-vertical', config.crop_vertical);
rootStyle.setProperty('--blob-size', config.blob_size);
rootStyle.setProperty('--base-color', config.base_color);
rootStyle.setProperty('--alt-color', config.alt_color);

// print instructions
console.info('use m key to toggle debug mode');

// print mouse position
document.addEventListener('click', (e) => {
  console.info(`X:${e.clientX} Y:${e.clientY}`);
});

// toggle debug mode for setup
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  // toggle debug mode
  if (key === 'm') {
    let el = document.getElementById('frame');
    el.toggleAttribute('data-debug');
  }
});

function initApp() {
  if (config.debug_mode) {
    let frame = document.getElementById('frame');
    frame.setAttribute('data-debug', '');
  }

  // create blobs with random animations
  let filter = document.getElementById('filter');
  for (let i = 0; i < config.blob_count - 1; i++) {
    let blob = document.createElement('div');
    blob.classList.add('blob');
    blob.style.animation = `updown ease-in ${getRandomInt(30, 60)}s infinite alternate,
    leftright ease-in-out ${getRandomInt(30, 60)}s infinite,
    vastag linear ${getRandomInt(30, 60)}s infinite,
    spin linear ${getRandomInt(30, 60)}s infinite`;
    filter.appendChild(blob);
  }
}

initApp();

// helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
