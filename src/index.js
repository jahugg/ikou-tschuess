// import config
import config from './config.json';

// setting css custom propertie values
let rootStyle = document.body.style;
rootStyle.setProperty('--crop-top', config.crop_top);
rootStyle.setProperty('--crop-vertical', config.crop_vertical);
rootStyle.setProperty('--blob-size', config.blob_size);
rootStyle.setProperty('--base-color', config.base_color);
rootStyle.setProperty('--alt-color', config.alt_color);
rootStyle.setProperty('--alt-color-2',config.alt_color_2);

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
  if( key === 'f'){
    openFullScreen();
  }
});

function initApp() {
  if (config.debug_mode) {
    let frame = document.getElementById('frame');
    frame.setAttribute('data-debug', '');
  }

  // ========
  // create svg mask with config values
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', 0);
  svg.setAttribute('height', 0);
  svg.setAttribute('version', '1.1');
  let clipPathString = `<defs><clipPath id="mask">`;

  for (let pos of config.mask_positions) {
    let rect = `<rect x="0" y="0" width="${config.mask_size}" height="${config.mask_size}" transform="translate(${pos[0]} ${pos[1]}) rotate(45 0 0)" />`;
    clipPathString += rect;
  }
  clipPathString += `</clipPath></defs>`;
  svg.innerHTML = clipPathString;

  document.body.prepend(svg);

  // ========
  // create blobs with random animations
  let filter = document.getElementById('filter');
  for (let i = 0; i < config.blob_count - 1; i++) {
    let blob = document.createElement('div');
    blob.classList.add('blob');
    blob.style.animation = `updown ease-in ${getRandomInt(30, 60)}s infinite alternate,
    leftright ease-in-out ${getRandomInt(30, 60)}s infinite`;
    // vastag linear ${getRandomInt(0, 80)}s infinite`;
    // spin linear ${getRandomInt(30, 60)}s infinite`;
    
    filter.appendChild(blob);
  }
  setInterval(changeBackgroundColor, 6000);
  let elem = document.documentElement;
  document.body.addEventListener('click', openFullScreen );
  // openFullScreen();
}
window.addEventListener('DOMContentLoaded',initApp);

// helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


// background color

let colorIndex =0;
let colorsArray = new Array('black','white','yellow','rgb(0,255,0)','rgb(200,0,155)');
function changeBackgroundColor(){
  
  let filter = document.getElementById('filter');
  filter.style.background = colorsArray[colorIndex];
  console.log(colorsArray[colorIndex]);
  if(colorIndex<colorsArray.length-1){
    colorIndex++;
  }
  else{
    colorIndex=0;
  }

}

// fullscreen
function clickTest(){
  console.log('mouse pressed');
}
function openFullScreen(){
  let elem = document.documentElement;
  if(elem.requestFullScreen){
    elem.requestFullscreen();
  }else if(elem.webkitRequestFullscreen){ /* Safari */
    elem.webkitRequestFullscreen();
  }else if(elem.msRquestFullscreen){  /* IE11 */
    elem.msRquestFullscreen();
  }
}