const blobCount = 10;

console.info('toggle Mask: m\ntoggle Frame: n\ntoggle Background: b');

// print mouse position
document.addEventListener('click', (e) => {
  console.info(`X:${e.clientX} Y:${e.clientY}`);
});

// toggle controls for setup
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  // toggle mask
  if (key === 'm') {
    // get current clip-path value
    let el = document.getElementById('frame');
    let value = window.getComputedStyle(el).clipPath;

    if (value != 'none') el.style.clipPath = 'none';
    else el.style.clipPath = 'url(#mask)';
  }

  // toggle frame
  if (key === 'n') {
    // get current border value
    let el = document.getElementById('frame');
    let value = window.getComputedStyle(el).border;

    let defaultValue = '2px solid rgb(255, 0, 0)';
    if (value != defaultValue) el.style.border = defaultValue;
    else el.style.removeProperty('border');
  }

  // toggle frame
  if (key === 'b') {
    // get current border value
    let el = document.getElementById('filter');
    let value = window.getComputedStyle(el).background;

    let defaultValue = 'rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box';
    if (value != defaultValue) mel.style.background = "black";
    else el.style.background = "white";
  }
});

function initBlobs() {
  let filter = document.getElementById('filter');

  // create blobs with random animations
  for (let i = 0; i < blobCount - 1; i++) {
    let blob = document.createElement('div');
    blob.classList.add('blob');
    blob.style.animation = `updown ease-in ${getRandomInt(30, 60)}s infinite alternate,
    leftright ease-in-out ${getRandomInt(30, 60)}s infinite,
    vastag linear ${getRandomInt(30, 60)}s infinite,
    spin linear ${getRandomInt(30, 60)}s infinite`;
    filter.appendChild(blob);
  }
}

initBlobs();

// helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
