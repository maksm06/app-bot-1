console.log('conected')
const image = document.getElementById('end');
let direction = 0;
const step = 12;
let intervalId;

function moveImage() {
  const currentX = parseFloat(image.style.transform.split(',')[0].split('(')[1]);
  let newX = currentX + (step * direction);

  image.style.transform = `translate(${newX}px, 0)`;
}

function startAnimation() {
  intervalId = setInterval(moveImage, 16); 
}

function stopAnimation() {
  clearInterval(intervalId);
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'A') {
    direction = -1;
    console.log('moven');
    
    startAnimation();
  } else if (event.key === 'd' || event.key === 'D') {
    direction = 1;
    startAnimation();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'a' || event.key === 'A' || event.key === 'd' || event.key === 'D') {
    direction = 0;
    stopAnimation();
  }
});