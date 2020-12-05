// print mouse position
let lamp = document.querySelector('body');
lamp.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
});
